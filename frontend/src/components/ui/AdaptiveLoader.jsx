import "./AIProcessing.css";

function AdaptiveLoader() {
  return (
    <div className="ai-overlay">

      <div className="ai-card">

        <div className="ai-spinner"></div>

        <h2>AuraGen AI</h2>

        <p className="ai-status">
          Rebuilding Interface...
        </p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="ai-steps">

          <div className="step done">
            ✓ High Cognitive Load Detected
          </div>

          <div className="step done">
            ✓ Analysing User Behaviour
          </div>

          <div className="step active">
            ● Generating Simpler UI
          </div>

          <div className="step waiting">
            ○ Rendering Components
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdaptiveLoader;