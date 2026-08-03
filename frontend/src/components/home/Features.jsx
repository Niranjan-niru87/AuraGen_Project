import "./Features.css";

import {
    Brain,
    Sparkles,
    Activity,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

function Features() {

    const features = [

    {
        icon: <Brain size={40} />,
        iconClass: "brain",
        title: "Cognitive Load Detection",
        description:
            "Detects hesitation, mouse behaviour, and interaction patterns to understand user frustration.",
    },

    {
        icon: <Sparkles size={40} />,
        iconClass: "sparkles",
        title: "AI Generated UI",
        description:
            "Generates adaptive user interfaces dynamically using AI-driven decision making.",
    },

    {
        icon: <Activity size={40} />,
        iconClass: "activity",
        title: "Real-Time Adaptation",
        description:
            "Updates interfaces instantly while preserving user progress and context.",
    },

    {
        icon: <ShieldCheck size={40} />,
        iconClass: "shield",
        title: "Secure Rendering",
        description:
            "Validates generated components before rendering them to ensure safe execution.",
    },

];
    return (

        <section id="features" className="features"> 

            <div className="features-header">

                <span className="section-badge">
                    Platform Capabilities
                </span>

                <h2>
                    Everything Needed For
                    <br />
                    Adaptive User Interfaces
                </h2>

                <p>
                    AuraGen combines AI, telemetry, behavioural analysis,
                    and adaptive rendering into one intelligent platform.
                </p>

            </div>

            <div className="features-grid">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="feature-card"
                    >

                        <div className={`feature-icon ${feature.iconClass}`}>
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>

                        <a href="#">
                            Learn More
                            <ArrowRight size={18} />
                        </a>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Features;