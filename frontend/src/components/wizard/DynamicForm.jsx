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
    const safeStep =
    Math.min(currentStep, form.steps.length - 1);

const completedFields =
    form.steps.filter(
        step => formData[step.field]
    ).length;

const progress =
    form.steps.length > 0
        ? (completedFields / form.steps.length) * 100
        : 0;

useEffect(() => {

    if (!form || !form.steps) return;

    if (currentStep >= form.steps.length) {

        setCurrentStep(form.steps.length - 1);

    }

}, [form]);

    useEffect(() => {

    if (!form || !form.steps) return;

    const completedFields = form.steps
        .filter(step => formData[step.field])
        .map(step => step.field);

    const formContext = {

        currentStep,

        totalSteps: form.steps.length,

        formTitle: form.title,

        completedFields,

        formData

    };

    localStorage.setItem(
        "auraGenFormContext",
        JSON.stringify(formContext)
    );

    console.log(
        "========== FORM CONTEXT =========="
    );

    console.log(formContext);

}, [formData, currentStep, form]);


const validateAllFields = () => {

    for (const field of form.steps) {

        const value =
            formData[field.field] || "";

        if (
            field.required &&
            value.trim() === ""
        ) {

            setValidationError(
                `Please enter your ${field.label}.`
            );

            return false;
        }

        if (
            field.type === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {

            setValidationError(
                "Please enter a valid email address."
            );

            return false;
        }
    }

    setValidationError("");

    return true;
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

    <form onSubmit={(e) => e.preventDefault()}>

    <div
        style={{
            animation: "fadeIn 0.4s ease"
        }}
    >

        {form.steps.map((field) => (

            <div
                key={field.field}
                style={{
                    marginBottom: "24px"
                }}
            >

                <DynamicInput
                    field={field}
                    value={
                        formData[field.field] || ""
                    }
                    onChange={(e) =>
                        setFormData((prevData) => ({
                            ...prevData,
                            [field.field]:
                                e.target.value,
                        }))
                    }
                />

            </div>

        ))}


        {validationError && (

            <div
                style={{
                    color: "#f87171",
                    marginBottom: "15px"
                }}
            >
                {validationError}
            </div>

        )}


        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px"
            }}
        >

            <button
                type="button"
                onClick={() => {

                    if (!validateAllFields()) {
                        return;
                    }

                    setShowReview(true);

                }}
            >
                Review
            </button>

        </div>

    </div>

</form>
        </div>

    </div>

);

}

export default DynamicForm;