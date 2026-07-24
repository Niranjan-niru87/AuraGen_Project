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
            <TelemetryPanel />
            <DynamicForm form={form} />
        </>
    );
}

export default Demo;