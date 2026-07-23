import DynamicInput from "./DynamicInput";

function DynamicForm({ form }) {

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