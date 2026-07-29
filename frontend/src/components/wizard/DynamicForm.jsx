import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicInput from "./DynamicInput";

function DynamicForm({ form }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();
    const nextStep = () => {
    if (currentStep < form.steps.length - 1) {
        setCurrentStep(currentStep + 1);
    }
};

const previousStep = () => {
    if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
    }
};
const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
setIsSubmitting(true);

    try {
        const response = await fetch("http://localhost:5000/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        console.log("Server Response:", result);

        navigate("/success");

    } catch (error) {
    console.error("Submission Failed:", error);

    setSubmitError("Submission failed. Please try again.");

    setIsSubmitting(false);
}
};

    // Wait until the form arrives from the backend
    console.log("Form received:", form);
    if (!form || !form.steps) {
        return <h2>Loading form...</h2>;
    }

    return (

        <div>

            <h1>{form.title}</h1>

            <p>{form.description}</p>
            <p>
    Field {currentStep + 1} of {form.steps.length}
</p>

    <form onSubmit={handleSubmit}>

    <DynamicInput
    key={form.steps[currentStep].field}
    field={form.steps[currentStep]}
    value={formData[form.steps[currentStep].field] || ""}
    onChange={(e) =>
        setFormData({
            ...formData,
            [form.steps[currentStep].field]: e.target.value,
        })
    }

/>
{submitError && (
    <p
        style={{
            color: "red",
            marginBottom: "15px",
        }}
    >
        {submitError}
    </p>
)}
    <div style={{ marginTop: "20px" }}>

    {currentStep > 0 && (
        <button
            type="button"
            onClick={previousStep}
        >
            Previous
        </button>
    )}

    {currentStep < form.steps.length - 1 ? (
        <button
            type="button"
            onClick={nextStep}
            style={{ marginLeft: "10px" }}
        >
            Next
        </button>
    ) : (
        <button
    type="submit"
    disabled={isSubmitting}
    style={{
        marginLeft: "10px"
    }}
>
    {isSubmitting ? "Submitting..." : "Submit"}
</button>
    )}

</div>

</form>

        </div>

    );

}

export default DynamicForm;