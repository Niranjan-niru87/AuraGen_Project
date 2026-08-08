import { useState, useEffect } from "react";
import AIAssistant from "../assistant/AIAssistant";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/auragen-logo.png";
function Navbar() {

    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState("home");
    const [showAssistant, setShowAssistant] = useState(false);

    // your existing useEffect...

    return (
        <>
            <nav className="navbar">

                <div className="navbar-container">

                    <div className="navbar-logo">
                        <img src={logo} alt="AuraGen Logo" />
                        <span>AuraGen</span>
                    </div>

                    <ul className="navbar-links">

                        {/* Home */}
                        <li
                            className={`navbar-link ${
                                activeSection === "home"
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                document
                                    .getElementById("home")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            Home
                        </li>

                        {/* Features */}
                        <li
                            className={`navbar-link ${
                                activeSection === "features"
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                document
                                    .getElementById("features")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            Features
                        </li>

                        {/* Contact */}
                        <li
                            className={`navbar-link ${
                                activeSection === "contact"
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                            }
                        >
                            Contact
                        </li>

                    </ul>

                    <button
                        className="navbar-assistant-button"
                        onClick={() =>
                            setShowAssistant(prev => !prev)
                        }
                    >
                        🤖 Assistant
                    </button>

                    <button
                        className="navbar-demo-btn"
                        onClick={() => {

                            localStorage.removeItem(
                                "auraGenFormData"
                            );

                            localStorage.removeItem(
                                "auraGenCurrentStep"
                            );

                            navigate("/demo");

                        }}
                    >
                        🚀 Launch AI Demo
                    </button>

                </div>

            </nav>

            {showAssistant && (
                <div className="navbar-assistant-popup">
                    <AIAssistant field="general" />
                </div>
            )}

        </>
    );
}

export default Navbar;