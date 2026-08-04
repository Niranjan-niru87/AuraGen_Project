import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DynamicInput from "./DynamicInput";
import "./DynamicForm.css";
import ReviewPage from "./ReviewPage";

function DynamicForm({ form }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [isRestored, setIsRestored] = useState(false);
    const [draftMessage, setDraftMessage] = useState("");

    // Save Draft:
    useEffect(() => {

    if (!isRestored) return;

    localStorage.setItem(
        "auraGenFormData",
        JSON.stringify(formData)
    );

}, [formData, isRestored]);

// Restore Draft    
useEffect(() => {

    const savedData = localStorage.getItem("auraGenFormData");

    console.log("Restoring:", savedData);

    if (savedData) {

    setFormData(JSON.parse(savedData));

    const savedStep = localStorage.getItem("auraGenCurrentStep");

    if (savedStep) {
        setCurrentStep(Number(savedStep));
    }

    // Show notification
    setDraftMessage("✅ Draft Restored Successfully");
    console.log("Draft Message:", draftMessage);

    // Hide after 3 seconds
    setTimeout(() => {
        setDraftMessage("");
    }, 3000);

    console.log("Draft Restored");

}
    setIsRestored(true);

}, []); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [validationError, setValidationError] = useState("");
    const [showReview, setShowReview] = useState(false);
    const navigate = useNavigate();
    const progress = ((currentStep + 1) / form.steps.length) * 100;

    const validateCurrentField = () => {

    const currentField = form.steps[currentStep];
    const currentValue = formData[currentField.field] || "";

    if (currentField.required && currentValue.trim() === "") {
        setValidationError(`Please enter your ${currentField.label}.`);
        return false;
    }

    if (
        currentField.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentValue)
    ) {
        setValidationError("Please enter a valid email address.");
        return false;
    }

    setValidationError("");
    return true;
};
   const nextStep = () => {

    const currentField = form.steps[currentStep];

    const currentValue = formData[currentField.field] || "";

    if (currentField.required && currentValue.trim() === "") {

        setValidationError(`Please enter your ${currentField.label}.`);

        return;
    }
    if (
    currentField.type === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentValue)
) {
    console.log("Current Value:", currentValue);
    setValidationError("Please enter a valid email address.");
    return;
}

    setValidationError("");

   if (currentStep < form.steps.length - 1) {

    const next = currentStep + 1;

    setCurrentStep(next);

    localStorage.setItem(
        "auraGenCurrentStep",
        next
    );
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

// Clear saved draft
localStorage.removeItem("auraGenFormData");
localStorage.removeItem("auraGenCurrentStep");

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
    console.log("Current Step:", currentStep);
console.log("Total Steps:", form.steps.length);
console.log("Current Field:", form.steps[currentStep]);
console.log("Review Data:", formData);
   if (showReview) {
    console.log("Current formData:", formData);
    return (
        <ReviewPage
            formData={formData}
            onEdit={() => setShowReview(false)}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
        />
    );
}

    return (

<div className="adaptive-container">

    <div className="adaptive-card">

            <h1>{form.title}</h1>

            <p>{form.description}</p>
            {draftMessage && (
    <div
        style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "15px",
            textAlign: "center",
            fontWeight: "bold",
        }}
    >
        {draftMessage}
    </div>
)}
           <div className="progress-wrapper">

    <div className="progress-header">

        <span>
            Completion Progress
        </span>

        <span>
            {Math.round(progress)}%
        </span>

    </div>


    <div className="progress-container">

        <div
            className="progress-fill"
            style={{
                width:`${progress}%`
            }}
        >

        </div>

    </div>

</div>

    <form onSubmit={handleSubmit}>

    <div
    key={currentStep}
    style={{
        animation: "fadeIn 0.4s ease",
    }}
>
    <DynamicInput
        key={form.steps[currentStep].field}
        field={form.steps[currentStep]}
        value={formData[form.steps[currentStep].field] || ""}
        onChange={(e) =>
    setFormData((prevData) => ({
        ...prevData,
        [form.steps[currentStep].field]: e.target.value,
    }))
}
    />
</div>
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
    <div className="button-group">
        {validationError && (
    <p
        style={{
            color: "red",
            marginBottom: "15px",
        }}
    >
        {validationError}
    </p>
)}

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
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={() => {

            if (!validateCurrentField()) return;

            setShowReview(true);

        }}
    >
        Review
    </button>

)}

</div>

</form>
        </div>

    </div>

);

}

export default DynamicForm;