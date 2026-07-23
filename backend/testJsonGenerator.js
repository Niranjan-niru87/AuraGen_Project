const generateUI = require("./ai/jsonGenerator");

const telemetry = {

    mouseX: 120,

    mouseY: 200,

    clicks: 8,

    idleTime: 3,

    velocity: 1.8,

    cognitiveScore: 74

};

const ui = generateUI(telemetry);

console.log(JSON.stringify(ui, null, 2));