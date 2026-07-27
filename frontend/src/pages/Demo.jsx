import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";
import socket from "../services/websocket";

function Demo() {

    const [form, setForm] = useState(null);

    // Load initial form
    useEffect(() => {

        async function loadForm() {

            const response = await fetch("http://localhost:5000/api/form");

            const data = await response.json();

            setForm(data);

        }

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
    <Navbar />

    <div className="p-4">
        <Link
            to="/"
            className="inline-block mb-4 text-cyan-400 hover:text-cyan-300"
        >
            ← Back Home
        </Link>
    </div>

    <TelemetryPanel />
    <DynamicForm form={form} />
</>
);
}

export default Demo;