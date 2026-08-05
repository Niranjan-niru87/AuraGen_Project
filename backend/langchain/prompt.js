const { ChatPromptTemplate } = require("@langchain/core/prompts");


const prompt = ChatPromptTemplate.fromMessages([

    [
        "system",
        `
You are AuraGen AI.

Your job is to generate adaptive user interfaces.

Rules:

1. Generate only valid JSON.
2. Follow AuraGen UI schema.
3. Reduce complexity when cognitive load is high.
4. Preserve user experience.
5. Never add explanations outside JSON.
`
    ],

    [
        "human",
        `
User Telemetry:

Mouse X: {mouseX}

Mouse Y: {mouseY}

Clicks: {clicks}

Idle Time: {idleTime}

Velocity: {velocity}

Cognitive Score: {cognitiveScore}


Decision:

Mode: {mode}

Reason: {reason}

Form Type: {formType}


Generate the adaptive UI JSON.
`
    ]

]);


module.exports = prompt;