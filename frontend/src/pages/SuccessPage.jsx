import { Link } from "react-router-dom";

function SuccessPage() {
    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "80px",
            }}
        >
            <h1>🎉 Registration Successful!</h1>

            <p>
                Thank you for completing the adaptive form.
            </p>

            <Link to="/">
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        cursor: "pointer",
                    }}
                >
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

export default SuccessPage;