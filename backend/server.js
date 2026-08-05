const analyzeTelemetry = require("./decision/decisionEngine");
const generateUI = require("./ai/jsonGenerator");
const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");
const generateAdaptiveUI =
require("./ai/adaptiveUI");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("AuraGen Backend Running");
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/api/form", async (req, res) => {

    const telemetry = {
        mouseX: 150,
        mouseY: 200,
        clicks: 8,
        idleTime: 3,
        velocity: 2.5,
        cognitiveScore: 75
    };

    const form = await generateUI(telemetry);

    res.json(form);

});
app.post("/api/submit", (req, res) => {

    console.log("========== FORM SUBMISSION ==========");
    console.log(req.body);

    res.json({
        success: true,
        message: "Form submitted successfully!"
    });

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

   const decision = analyzeTelemetry(telemetry);

console.log("✅ Decision Created");
console.log(decision);

let form;


if(decision.shouldGenerateAI){

    console.log("🤖 AI Generation Started");

    form = await generateAdaptiveUI(
        telemetry,
        decision
    );

}
else{

    console.log("🟢 User comfortable - Using existing UI");

    form = await generateUI(telemetry);

}

console.log("✅ Form Generated");
console.log(form);

console.log("✅ Sending Adaptive UI To React");


ws.send(JSON.stringify({

    type: "adaptiveUI",

    payload: form,

    decision: decision

}));


console.log("✅ Adaptive UI Sent Successfully");


    });   // message close

});       // websocket connection close