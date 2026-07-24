import DynamicInput from "./DynamicInput";

function DynamicForm({ form }) {

    // Wait until the form arrives from the backend
    if (!form || !form.steps) {
        return <h2>Loading form...</h2>;
    }

    return (

        <div>

            <h1>{form.title}</h1>

            <p>{form.description}</p>

            <form>

                {form.steps.map((step, index) => (

                    <DynamicInput
                        key={index}
                        field={step}
                    />

                ))}

                <button>
                    Submit
                </button>

            </form>

        </div>

    );

}

export default DynamicForm;