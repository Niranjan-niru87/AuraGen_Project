import { useState, useEffect } from "react";
import "./AIProcessing.css";

function AIProcessing() {

    const messages = [
        "🧠 Initializing AuraGen AI...",
        "📊 Analysing Mouse Behaviour...",
        "🖱 Detecting Hesitation...",
        "🧠 Calculating Cognitive Load...",
        "✨ Generating Adaptive UI...",
        "✅ Adaptive UI Ready"
    ];

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentStep((prev) => {
                if (prev < messages.length - 1) {
                    return prev + 1;
                }

                clearInterval(interval);
                return prev;
            });

        }, 500);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="ai-overlay">
            <div className="ai-card">

                <div className="ai-spinner"></div>

                <h2>AuraGen AI</h2>

                <p className="ai-status">
                    {messages[currentStep]}
                </p>

                {/* Rest of your UI */}

            </div>
        </div>
    );
}

export default AIProcessing;