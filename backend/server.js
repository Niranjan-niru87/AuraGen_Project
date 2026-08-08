require("dotenv").config();
const askAssistant =
    require("./ai/assistant");

const model =
    require("./langchain/llm.js");

const analyzeFriction =
    require("./friction/frictionEngine");

const express =
    require("express");

const cors =
    require("cors");

const WebSocket =
    require("ws");


const app = express();

app.use(cors());
app.use(express.json());


const PORT = 5000;


// =============================
// BASIC SERVER
// =============================

app.get("/", (req, res) => {

    res.send("AuraGen Backend Running");

});


// =============================
// INITIAL FORM
// =============================

app.get("/api/form", (req, res) => {

    res.json({

        title: "Registration Form",

        description:
            "Let's complete this step by step.",

        steps: [

            {
                label: "Full Name",
                field: "fullName",
                type: "text",
                required: true
            },

            {
                label: "Email Address",
                field: "email",
                type: "email",
                required: true
            }

        ]

    });

});


// =============================
// AI ASSISTANT
// =============================

app.post("/api/assistant", async (req, res) => {

    const {
        question,
        field
    } = req.body;

    console.log("========== AI ASSISTANT ==========");

    console.log("Field:", field);
    console.log("Question:", question);

    try {

        const answer = await askAssistant(
            question,
            field
        );

        res.json({
            success: true,
            answer
        });

    } catch (error) {

        console.error(
            "Assistant Error:",
            error.message
        );

        res.status(500).json({
            success: false,
            answer:
                "Sorry, I couldn't process that question right now."
        });

    }

});


// =============================
// FORM SUBMISSION
// =============================

app.post("/api/submit", (req, res) => {

    console.log(
        "========== FORM SUBMISSION =========="
    );

    console.log(req.body);


    res.json({

        success: true,

        message:
            "Form submitted successfully!"

    });

});


// =============================
// SERVER
// =============================

const server =
    app.listen(PORT, () => {

        console.log(
            `Server running on http://localhost:${PORT}`
        );

    });


// =============================
// WEBSOCKET
// =============================

const wss =
    new WebSocket.Server({ server });


wss.on("connection", (ws) => {

    console.log("Frontend Connected");

    let assistantShown = false;


    ws.on("message", async (message) => {

        try {

            const telemetry =
                JSON.parse(message);


            const friction =
                analyzeFriction(
                    telemetry
                );


            console.log(
                "========== FRICTION ANALYSIS =========="
            );

            console.log(friction);


            if (
    friction.isFrustrated &&
    !assistantShown
) {

   if (telemetry.clicks >= 5) {

    console.log("🤖 Triggering AI Assistant");

    ws.send(JSON.stringify({

        type: "showAssistant",

        field: friction.frictionPoint.field || "unknown",

        reason: friction.frictionPoint.reason

    }));

}
}

        } catch (error) {

            console.error(
                "Telemetry Error:",
                error
            );

        }

    });

});