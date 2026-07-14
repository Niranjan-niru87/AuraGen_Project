const buildPrompt = require("./ai/promptBuilder");

const telemetry = {
  mouseX: 420,
  mouseY: 315,
  clicks: 28,
  idleTime: 5,
  velocity: 1.8,
  cognitiveScore: 72,
};

const prompt = buildPrompt(telemetry);

console.log(prompt);