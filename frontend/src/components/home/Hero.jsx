import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();

    return (
        <section id="home" className="hero">

            <div className="hero-content">

                {/* Left Side */}

                <div className="hero-left">

                    <span className="hero-badge">
                        AI Powered Adaptive UI
                    </span>

                    <h1 className="hero-title">
                        Adaptive Interfaces
                        <br />
                        Powered by AI
                    </h1>

                    <p className="hero-description">
                        AuraGen intelligently detects user behaviour,
                        understands friction in real time, and dynamically
                        transforms interfaces into simpler,
                        AI-powered experiences.
                    </p>

                    <div className="hero-buttons">

    <button
        className="hero-secondary-btn"
        onClick={() => {

            document
                .getElementById("features")
                ?.scrollIntoView({
                    behavior: "smooth",
                });

        }}
    >
        Learn More
    </button>

</div>

                </div>

                {/* Right Side */}

                <div className="hero-right">

                    <div className="ai-preview">

                        <h3>AI Engine</h3>

                        <p>🟢 Connected</p>

                        <div className="preview-row">
                            <span>Cognitive Score</span>
                            <strong>78%</strong>
                        </div>

                        <div className="preview-row">
                            <span>Confidence</span>
                            <strong>94%</strong>
                        </div>

                        <div className="preview-row">
                            <span>Status</span>
                            <strong>Monitoring User</strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;