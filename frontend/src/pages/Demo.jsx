import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AdaptationBadge from "../components/ui/AdaptationBadge";
import AIProcessing from "../components/ui/AIProcessing";
import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";
import AdaptiveLoader from "../components/ui/AdaptiveLoader";
import socket from "../services/websocket";
import "./Demo.css";
import AIAssistant from "../components/assistant/AIAssistant";

function Demo() {

    const [form, setForm] = useState(null);
    const [isProcessing, setIsProcessing] = useState(true);
    const [adaptationMessage, setAdaptationMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [showAssistant,setShowAssistant] = useState(false);
    const [assistantField,setAssistantField] = useState("unknown");

    // Load initial form
    useEffect(() => {

    async function loadForm() {

        console.log("Step 1: loadForm started");

        try {

            console.log("Step 2: Fetching...");

            const response = await fetch("http://localhost:5000/api/form");

            console.log("Step 3: Response", response);

            const data = await response.json();

            console.log("Step 4: Data", data);

            setForm(data);
            if(data.aiStatus === "fallback"){

    setAdaptationMessage(
        "⚠️ AI unavailable. AuraGen is using safe fallback UI."
    );

}

            setTimeout(() => {

            setIsProcessing(false);
            }, 3000);

            console.log("Step 5: Form Stored");

        } catch(error){

console.error(
    "Fetch Error:",
    error
);


setAdaptationMessage(
    "⚠️ AuraGen Backend is unavailable. Please start the server."
);


setIsProcessing(false);

}
    }

    // ⭐ THIS LINE IS MISSING
    loadForm();

}, []);

    // Listen for WebSocket messages
    useEffect(() => {

       socket.onmessage = (event) => {

    // Ignore plain text messages
    if (!event.data.startsWith("{")) {
        console.log(event.data);
        return;
    }

    const message = JSON.parse(event.data);
    if(message.type === "showAssistant"){


console.log(
"🤖 Showing AI Assistant"
);


setAssistantField(
message.field
);


setShowAssistant(true);


}

    console.log(message);

   if(message.type === "showAssistant"){

console.log(
"🤖 Showing AI Assistant"
);


setAssistantField(
message.field || "unknown"
);


setShowAssistant(true);

}


};

    }, []);
   if (isProcessing) {
    return null;
}


if (!form) {
    return null;
}


return (
    <div className="demo-page">

        <Link to="/" className="back-home">
            ← Back to Home
        </Link>

        <div className="demo-content">

            {/* FORM */}
            {showForm && (
                <div className="form-section">
                    <DynamicForm form={form} />
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

    </div>
);
}

export default Demo;