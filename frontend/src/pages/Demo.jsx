import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import AdaptationBadge from "../components/ui/AdaptationBadge";
import AIProcessing from "../components/ui/AIProcessing";
import DynamicForm from "../components/wizard/DynamicForm";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";
import AdaptiveLoader from "../components/ui/AdaptiveLoader";
import socket from "../services/websocket";
import "./Demo.css";

function Demo() {

    const [form, setForm] = useState(null);
    const [isProcessing, setIsProcessing] = useState(true);
    const [isGeneratingUI, setIsGeneratingUI] = useState(false);
    const [adaptationMessage, setAdaptationMessage] = useState("");
    const [showForm, setShowForm] = useState(true);

   const testAdaptiveUI = () => {

    const adaptiveForm = {

        title:"Simplified Registration",

        description:
        "AuraGen simplified this interface based on your behaviour.",

        cognitiveScore:35,

        steps:[
            {
                label:"Name",
                field:"fullName",
                type:"text",
                required:true
            }
        ]

    };


    console.log("Before Adaptive Change");


    setShowForm(false);

    setIsGeneratingUI(true);


    setTimeout(()=>{

        console.log("Applying Adaptive UI");

        setForm(adaptiveForm);

        setIsGeneratingUI(false);

        setShowForm(true);

    },2500);

};

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

            setTimeout(() => {
            setIsProcessing(false);
            }, 3000);

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

    const score = message.payload.cognitiveScore;

    console.log("Cognitive Score:", score);


    if(score >= 70){

        console.log(
            "High Cognitive Load detected. Adapting UI..."
        );


        setShowForm(false);

        setIsGeneratingUI(true);

        setAdaptationMessage(
"AI simplified this interface based on your interaction behaviour."
);


        setTimeout(() => {

            setForm(message.payload);

            setIsGeneratingUI(false);

            setShowForm(true);

        },2500);


    } else {

        console.log(
            "Cognitive Load Normal. Keeping current UI."
        );

    }

}
};

    }, []);
   if (isProcessing) {
    return <AIProcessing />;
}


if (isGeneratingUI) {
    return <AdaptiveLoader />;
}


if (!form) {
    return <AIProcessing />;
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


<button
className="adaptive-test-button"
onClick={testAdaptiveUI}
>
🤖 Test Adaptive UI
</button>


</div>

    <TelemetryPanel />
    {
adaptationMessage && (

<AdaptationBadge 
message={adaptationMessage}
/>

)
}
    {adaptationMessage && (
    <div className="adaptation-message">

<div className="adaptation-title">

🤖 AuraGen AI Adaptation

</div>


<p>

Your interaction behaviour indicated difficulty.
AuraGen simplified this interface to reduce cognitive load.

</p>

</div>
    
    
)}

    {showForm && (
        <div className="form-transition">
            <DynamicForm form={form} />
        </div>
    )}

</>
);
}

export default Demo;