const systemPrompt = require("./systemPrompt");
const promptTemplate = require("./promptTemplates");

function buildPrompt(telemetry) {

    return `
${systemPrompt}

${promptTemplate}

Current User Telemetry

Mouse X : ${telemetry.mouseX}
Mouse Y : ${telemetry.mouseY}

Clicks : ${telemetry.clicks}

Idle Time : ${telemetry.idleTime} seconds

Velocity : ${telemetry.velocity}

Cognitive Score : ${telemetry.cognitiveScore}

Mode : ${telemetry.mode}

Reason : ${telemetry.reason}

Form Type : ${telemetry.formType}
`;

}

module.exports = buildPrompt;
