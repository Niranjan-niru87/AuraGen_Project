import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";
import socket from "../services/websocket";
import "./Demo.css";

function Demo() {

    const [form, setForm] = useState(null);

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

            console.log("Step 5: Form Stored");

        } catch (error) {

            console.error("Fetch Error:", error);

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

    console.log(message);

    if (message.type === "adaptiveUI") {
        console.log("Received payload:", message.payload);
        setForm(message.payload);
    }
};

    }, []);

    if (!form) {

        return <h2>Loading...</h2>;

    }

    return (
    <>

    <div className="demo-header">

    <Link
        to="/"
        className="back-button"
    >
        ← Back to Home
    </Link>

</div>

    <TelemetryPanel />
    <DynamicForm form={form} />
</>
);
}

export default Demo;