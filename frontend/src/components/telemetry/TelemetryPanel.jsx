import useMouseTracker from "../../hooks/useMouseTracker";
import useClickTracker from "../../hooks/useClickTracker";
import useHesitationTracker from "../../hooks/useHesitationTracker";
import useMouseVelocity from "../../hooks/useMouseVelocity";

function TelemetryPanel() {
  const position = useMouseTracker();
  const clicks = useClickTracker();
  const idleTime = useHesitationTracker();
  const velocity = useMouseVelocity();
  const cognitiveScore = Math.min(
  100,
  clicks * 2 + idleTime * 5 + Number(velocity) * 10
   );

  return (
    <div className="fixed bottom-5 right-5 bg-slate-800 text-white p-4 rounded-lg shadow-lg">

      <h2 className="text-cyan-400 font-bold mb-2">
        Telemetry Panel
      </h2>

      <p>Mouse X : {position.x}</p>

      <p>Mouse Y : {position.y}</p>

      <p>Total Clicks : {clicks}</p>

      <p>Idle Time : {idleTime} sec</p>

      <p>Velocity : {velocity}</p>
      <p className="mt-2 text-cyan-300 font-bold">
      Cognitive Load Score : {cognitiveScore.toFixed(0)}
      </p>

    </div>
  );
}

export default TelemetryPanel;