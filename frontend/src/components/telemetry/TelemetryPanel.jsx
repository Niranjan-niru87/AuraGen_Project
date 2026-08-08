import { useEffect, useRef, useState } from "react";
import socket from "../../services/websocket";
import useMouseTracker from "../../hooks/useMouseTracker";
import useClickTracker from "../../hooks/useClickTracker";
import useHesitationTracker from "../../hooks/useHesitationTracker";
import useMouseVelocity from "../../hooks/useMouseVelocity";
import { calculateCognitiveScore } from "../../hooks/cognitiveScore";
import "./TelemetryPanel.css";

function TelemetryPanel() {
    const [currentField,setCurrentField] = useState("unknown");

const [fieldAttempts,setFieldAttempts] = useState(0);

const [fieldErrors,setFieldErrors] = useState(0);

const fieldStartTime = useRef(null);
useEffect(()=>{


const handleFieldFocus = (event)=>{

const fieldName =
event.detail.field;


setCurrentField(fieldName);


localStorage.setItem(
"auraGenCurrentField",
fieldName
);


setFieldAttempts(
prev => prev + 1
);


fieldStartTime.current =
Date.now();

};


window.addEventListener(
"auraFieldFocus",
handleFieldFocus
);


return ()=>{

window.removeEventListener(
"auraFieldFocus",
handleFieldFocus
);

};


},[]);
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


    if(socket.readyState === 1){

        socket.send(JSON.stringify({

            type:"generateAdaptiveUI",

            cognitiveScore

        }));

    }
    else{

        console.log(
            "Waiting for socket..."
        );

    }

}

},[cognitiveScore]);

 useEffect(() => {

console.log("=================================");
console.log("Socket ReadyState:", socket.readyState);


const formContext = JSON.parse(
localStorage.getItem("auraGenFormContext")
) || {};


const activeField = currentField;


let timeSpentOnField = 0;


if(fieldStartTime.current){

timeSpentOnField =
Math.floor(
(Date.now() - fieldStartTime.current)
/1000
);

}


const telemetry = {

mouseX: position.x,

mouseY: position.y,

clicks,

idleTime,

velocity,

cognitiveScore,


currentField: activeField,

fieldAttempts,

fieldErrors,

timeSpentOnField,


formContext

};


console.log("========== TELEMETRY ==========");

console.table(telemetry);



if(socket.readyState === 1){

console.log("✅ Sending telemetry...");

socket.send(
JSON.stringify(telemetry)
);

}
else{

console.log("❌ Socket is NOT open");

}


},[
position,
clicks,
idleTime,
velocity,
cognitiveScore,
fieldAttempts,
fieldErrors
]);

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