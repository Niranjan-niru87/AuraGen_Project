import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/auragen-logo.png";
function Navbar() {

    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const handleScroll = () => {

            const features = document.getElementById("features");
            const contact = document.getElementById("contact");

            const scrollY = window.scrollY + 150;

            if (contact && scrollY >= contact.offsetTop) {

                setActiveSection("contact");

            } else if (features && scrollY >= features.offsetTop) {

                setActiveSection("features");

            } else {

                setActiveSection("home");

            }

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);
    return (

        <nav className="navbar">

            <div className="navbar-container">

                <div className="navbar-logo">
                <img src={logo} alt="AuraGen Logo" />
                <span>AuraGen</span>
                </div>
                {/* Navigation */}

                <ul className="navbar-links">

    <li
    className={`navbar-link ${activeSection === "home" ? "active" : ""}`}
    onClick={() =>
        document.getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
    }
>
    Home
</li>

    <li
    className={`navbar-link ${activeSection === "features" ? "active" : ""}`}
    onClick={() =>
        document.getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" })
    }
>
    Features
</li>

    <li
    className={`navbar-link ${activeSection === "contact" ? "active" : ""}`}
    onClick={() =>
        document.getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
    }
>
    Contact
</li>

</ul>

                {/* CTA */}

                <button
                    className="navbar-demo-btn"
                    onClick={() => {

                        localStorage.removeItem("auraGenFormData");
                        localStorage.removeItem("auraGenCurrentStep");

                        navigate("/demo");

                    }}
                >
                    🚀 Launch AI Demo
                </button>

            </div>

        </nav>

    );

}

export default Navbar;