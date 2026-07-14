const systemPrompt = require("./systemPrompt");
const uiGenerationTemplate = require("./promptTemplates");

function buildPrompt(telemetry) {
  return `
${systemPrompt}

${uiGenerationTemplate}

Current User Telemetry

Mouse Position:
X = ${telemetry.mouseX}
Y = ${telemetry.mouseY}

Clicks:
${telemetry.clicks}

Idle Time:
${telemetry.idleTime} seconds

Mouse Velocity:
${telemetry.velocity}

Cognitive Load Score:
${telemetry.cognitiveScore}

Generate the JSON UI now.
`;
}

module.exports = buildPrompt;