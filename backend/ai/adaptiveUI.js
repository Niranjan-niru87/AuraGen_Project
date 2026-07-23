const generateUI = require("./jsonGenerator");

async function generateAdaptiveUI(telemetry, decision) {

    const enhancedTelemetry = {

        ...telemetry,

        mode: decision.mode,

        formType: decision.formType,

        reason: decision.reason

    };

    const json = await generateUI(enhancedTelemetry);

    return json;

}

module.exports = generateAdaptiveUI;