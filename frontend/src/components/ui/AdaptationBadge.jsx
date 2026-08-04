import "./AdaptationBadge.css";

function AdaptationBadge({message}) {

    return (

        <div className="adaptation-badge">

            <span className="ai-icon">
                🤖
            </span>

            <div>

                <h4>
                    AuraGen AI Adaptation
                </h4>

                <p>
                    {message}
                </p>

            </div>

        </div>

    );

}

export default AdaptationBadge;