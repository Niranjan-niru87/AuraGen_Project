import { useEffect, useRef } from "react";
import socket from "../../services/websocket";
import useMouseTracker from "../../hooks/useMouseTracker";
import useClickTracker from "../../hooks/useClickTracker";
import useHesitationTracker from "../../hooks/useHesitationTracker";
import useMouseVelocity from "../../hooks/useMouseVelocity";
import { calculateCognitiveScore } from "../../hooks/cognitiveScore";
import "./TelemetryPanel.css";

function TelemetryPanel() {
  const position = useMouseTracker();
  const clicks = useClickTracker();
  const idleTime = useHesitationTracker();
  const velocity = useMouseVelocity();
 const cognitiveScore = calculateCognitiveScore(
    clicks,
    idleTime,
    velocity
);
const adaptationTriggered = useRef(false);


useEffect(()=>{

    if(
        cognitiveScore >= 70 &&
        !adaptationTriggered.current
    ){

        console.log(
            "🧠 High Cognitive Load Detected"
        );


        adaptationTriggered.current = true;


        socket.send(JSON.stringify({

            type:"generateAdaptiveUI",

            cognitiveScore

        }));

    }


},[cognitiveScore]);
 useEffect(() => {

    console.log("=================================");
    console.log("Socket ReadyState:", socket.readyState);

    const formContext = JSON.parse(
    localStorage.getItem("auraGenFormContext")
) || {};

const telemetry = {
    mouseX: position.x,
    mouseY: position.y,
    clicks,
    idleTime,
    velocity,
    cognitiveScore,

    formContext
};

    console.log("========== TELEMETRY ==========");

console.table({
    mouseX: telemetry.mouseX,
    mouseY: telemetry.mouseY,
    clicks: telemetry.clicks,
    idleTime: telemetry.idleTime,
    velocity: telemetry.velocity,
    cognitiveScore: telemetry.cognitiveScore
});

console.log("========== FORM CONTEXT ==========");
console.log(telemetry.formContext);

    if (socket.readyState === WebSocket.OPEN) {

        console.log("✅ Sending telemetry...");

        socket.send(JSON.stringify(telemetry));

    } else {

        console.log("❌ Socket is NOT open");

    }

}, [position, clicks, idleTime, velocity, cognitiveScore]);

  return (
    <div className="telemetry-panel">

      <h2 className="text-cyan-400 font-bold mb-2">
        Telemetry Panel
      </h2>

      <p>Mouse X : {position.x}</p>

      <p>Mouse Y : {position.y}</p>

      <p>Total Clicks : {clicks}</p>

      <p>Idle Time : {idleTime} sec</p>

      <p>Velocity : {velocity}</p>
      <p className="cognitive-score">

🧠 Cognitive Load Score :
{cognitiveScore.toFixed(0)}

</p>

    </div>
  );
}

export default TelemetryPanel;