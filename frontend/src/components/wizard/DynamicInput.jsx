function DynamicInput({ field }) {

    return (

        <div style={{ marginBottom: "20px" }}>

            <label>

                {field.label}

            </label>

            <br />

            <input

                type={field.type}

                placeholder={field.label}

                required={field.required}

                style={{
                    width: "300px",
                    padding: "10px",
                    marginTop: "5px"
                }}

            />

        </div>

    );

}

export default DynamicInput;