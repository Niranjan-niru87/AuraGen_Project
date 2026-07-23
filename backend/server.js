const analyzeTelemetry = require("./decision/decisionEngine");
const generateUI = require("./ai/jsonGenerator");
const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");
const generateAdaptiveUI =
require("./ai/adaptiveUI");

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("AuraGen Backend Running");
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/api/form", (req, res) => {

    const telemetry = {

        mouseX: 150,
        mouseY: 200,
        clicks: 8,
        idleTime: 3,
        velocity: 2.5,
        cognitiveScore: 75

    };

    const form = generateUI(telemetry);

    res.json(form);

});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {

    console.log("Frontend Connected");

    ws.on("message", async (message) => {

    const telemetry = JSON.parse(message);

    console.clear();

    console.log("========== AuraGen ==========\n");

    console.log("Telemetry:");

    console.table(telemetry);

    const decision =
    analyzeTelemetry(telemetry);

    const form =
    await generateAdaptiveUI(
    telemetry,
    decision
    );

console.log("\nGenerated Form:");

console.log(form);

});

    ws.send("Connected to AuraGen Backend");

});