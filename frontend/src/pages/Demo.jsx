import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";
import socket from "../services/websocket";
import AIAssistant from "../components/assistant/AIAssistant";

import "./Demo.css";

function Demo() {

    const [form, setForm] = useState(null);
    const [isProcessing, setIsProcessing] = useState(true);

    const [showForm, setShowForm] = useState(true);

    const [showAssistant, setShowAssistant] =
        useState(false);

    const [assistantField, setAssistantField] =
        useState("unknown");


    // =====================================
    // LOAD INITIAL FORM
    // =====================================

    useEffect(() => {

        async function loadForm() {

            console.log("Step 1: loadForm started");

            try {

                const response = await fetch("https://auragen-project.onrender.com/api/form");

                console.log(
                    "Step 2: Response:",
                    response
                );

                const data =
                    await response.json();

                console.log(
                    "Step 3: Form:",
                    data
                );

                setForm(data);

                setTimeout(() => {

                    setIsProcessing(false);

                }, 1000);

            }
            catch (error) {

                console.error(
                    "❌ Fetch Error:",
                    error
                );

                setIsProcessing(false);

            }

        }

        loadForm();

    }, []);


    // =====================================
    // WEBSOCKET
    // =====================================

    useEffect(() => {

        const handleMessage = (event) => {

            console.log(
                "📩 WebSocket Message:",
                event.data
            );


            if (
                typeof event.data !== "string"
            ) {
                return;
            }


            if (
                !event.data.startsWith("{")
            ) {

                console.log(
                    "Plain message:",
                    event.data
                );

                return;

            }


            try {

                const message =
                    JSON.parse(event.data);


                console.log(
                    "📦 Parsed Message:",
                    message
                );


                // ==========================
                // SHOW AI ASSISTANT
                // ==========================

                if (
                    message.type ===
                    "showAssistant"
                ) {

                    console.log(
                        "🤖 SHOWING AI ASSISTANT"
                    );


                    setAssistantField(
                        message.field ||
                        "unknown"
                    );


                    setShowAssistant(true);

                }

            }
            catch (error) {

                console.error(
                    "❌ WebSocket JSON Error:",
                    error
                );

            }

        };


        socket.addEventListener(
            "message",
            handleMessage
        );


        return () => {

            socket.removeEventListener(
                "message",
                handleMessage
            );

        };

    }, []);


    // =====================================
    // LOADING
    // =====================================

    if (isProcessing) {

        return (
            <div className="demo-loading">
                Loading AuraGen Demo...
            </div>
        );

    }


    if (!form) {

        return (
            <div className="demo-loading">
                Unable to load AuraGen form.
            </div>
        );

    }


    // =====================================
    // MAIN UI
    // =====================================

    return (

        <div className="demo-page">


            {/* BACK TO HOME */}

            <Link
                to="/"
                className="back-home"
            >
                ← Back to Home
            </Link>


            {/* MAIN CONTENT */}

            <div className="demo-content">


                {/* FORM */}

                {showForm && (

                    <div className="form-section">

                        <DynamicForm
                            form={form}
                        />

                    </div>

                )}


                {/* AI ASSISTANT */}

                {showAssistant && (

                    <div className="assistant-section">

                        <AIAssistant
                            field={assistantField}
                        />

                    </div>

                )}

            </div>


            {/* TELEMETRY */}

            <TelemetryPanel />

        </div>

    );

}

export default Demo;