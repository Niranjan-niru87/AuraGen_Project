import "./Footer.css";
import logo from "../../assets/auragen-logo.png";

function Footer() {
    return (
        <footer id="contact" className="footer">

            <div className="footer-container">

                <div className="footer-logo">
                <img src={logo} alt="AuraGen"/>
                <span>AuraGen</span>
                </div> 

                <div className="footer-brand">

                    <h2>AuraGen</h2>

                    <p>
                        Adaptive AI interfaces that intelligently
                        understand user behaviour and transform
                        experiences in real time.
                    </p>

                </div>

                {/* Center */}

                <div className="footer-links">

    <h3>Contact</h3>

    <a href="mailto:support@auragen.ai">
        📧 support@auragen.ai
    </a>

    <a href="mailto:team@auragen.ai">
        📩 team@auragen.ai
    </a>

</div>

<div className="footer-tech">

    <h3>Support</h3>

    <a href="#">
        💬 Send Feedback
    </a>

    <a href="#">
        🐞 Report Issue
    </a>

    <a href="#">
        ❓ Help Center
    </a>

</div>

            </div>

            <div className="footer-bottom">

                © 2026 AuraGen • Designed for Intelligent User Experiences

            </div>

        </footer>
    );
}

export default Footer;