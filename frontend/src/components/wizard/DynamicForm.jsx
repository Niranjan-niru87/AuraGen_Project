import { useState } from "react";
import DynamicInput from "./DynamicInput";

function DynamicForm({ form }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
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

            <form>

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
            style={{ marginLeft: "10px" }}
        >
            Submit
        </button>
    )}

</div>

</form>

        </div>

    );

}

export default DynamicForm;