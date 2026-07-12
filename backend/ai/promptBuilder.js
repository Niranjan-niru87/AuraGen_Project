function buildPrompt(telemetry) {
  return `
You are an expert React UI designer.

The user is interacting with a complex form.

Telemetry Data:
- Mouse X: ${telemetry.mouseX}
- Mouse Y: ${telemetry.mouseY}
- Total Clicks: ${telemetry.clicks}
- Idle Time: ${telemetry.idleTime} seconds
- Mouse Velocity: ${telemetry.velocity}
- Cognitive Load Score: ${telemetry.cognitiveScore}

Your task:
Generate a simplified step-by-step UI in JSON format.

Only return valid JSON.
`;
}

module.exports = buildPrompt;