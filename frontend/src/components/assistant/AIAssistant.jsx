import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant({ field = "unknown" }) {

    const [question, setQuestion] = useState("");

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text:
                "I noticed you may be having some difficulty. How can I help?"
        }
    ]);

    const [loading, setLoading] = useState(false);


    const askAssistant = async () => {

        if (!question.trim() || loading) {
            return;
        }


        const userQuestion = question.trim();


        setMessages(prev => [

            ...prev,

            {
                role: "user",
                text: userQuestion
            }

        ]);


        setQuestion("");
        setLoading(true);


        try {

            const response = await fetch(
                "https://auragen-project.onrender.com/api/assistant",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        question:
                            userQuestion,

                        field

                    })
                }
            );


            const data =
                await response.json();


            setMessages(prev => [

                ...prev,

                {
                    role: "assistant",

                    text:
                        data.answer ||
                        "Sorry, I couldn't answer that."
                }

            ]);

        }

        catch(error) {

            console.error(
                "Assistant Error:",
                error
            );


            setMessages(prev => [

                ...prev,

                {
                    role: "assistant",

                    text:
                        "Sorry, something went wrong. Please try again."
                }

            ]);

        }

        finally {

            setLoading(false);

        }

    };


    const handleKeyDown = (event) => {

        if(event.key === "Enter") {

            askAssistant();

        }

    };


    return (

        <div className="assistant-container">

            <div className="assistant-header">

                <div>

                    <div className="assistant-title">

                        🤖 AuraGen Assistant

                    </div>

                    <div className="assistant-subtitle">

                        Context-aware AI help

                    </div>

                </div>


                <div className="assistant-status">

                    <span></span>

                    AI Online

                </div>

            </div>


            <div className="assistant-messages">

                {messages.map(
                    (message, index) => (

                    <div
                        key={index}
                        className={
                            message.role === "user"
                                ? "message user-message"
                                : "message bot-message"
                        }
                    >

                        <div className="message-icon">

                            {message.role === "user"
                                ? "👤"
                                : "🤖"}

                        </div>


                        <div className="message-content">

                            {message.text}

                        </div>

                    </div>

                ))}


                {loading && (

                    <div className="message bot-message">

                        <div className="message-icon">
                            🤖
                        </div>

                        <div className="typing">

                            Thinking
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>

                        </div>

                    </div>

                )}

            </div>


            <div className="assistant-input-area">

                <input

                    type="text"

                    value={question}

                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }

                    onKeyDown={handleKeyDown}

                    placeholder="Ask AuraGen anything..."

                    disabled={loading}

                />


                <button

                    onClick={askAssistant}

                    disabled={
                        loading ||
                        !question.trim()
                    }

                >

                    {loading
                        ? "..."
                        : "➤"}

                </button>

            </div>


            <div className="assistant-hint">

                Press Enter to send

            </div>

        </div>

    );

}

export default AIAssistant;