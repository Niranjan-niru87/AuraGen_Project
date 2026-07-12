const express = require("express");
const cors = require("cors");
const WebSocket = require("ws");

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("AuraGen Backend Running");
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {

    console.log("Frontend Connected");

    ws.on("message", (message) => {

        console.log("Telemetry Received:");

        console.log(message.toString());

    });

    ws.send("Connected to AuraGen Backend");

});