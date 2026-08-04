function DynamicInput({ field, value, onChange }) {
    return (

        <div style={{ marginBottom: "20px" }}>

            <label>

                {field.label}

            </label>

            <br />

            <input
    className="adaptive-input"
    type={field.type}
    placeholder={`Enter your ${field.label}`}
    value={value}
    onChange={onChange}
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