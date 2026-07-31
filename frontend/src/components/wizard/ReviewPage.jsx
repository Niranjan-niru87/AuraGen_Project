function ReviewPage({
    formData,
    onEdit,
    onSubmit,
    isSubmitting,
}) {
    return (
        <div>
            <h1>Review Your Information</h1>

            {Object.entries(formData).map(([key, value]) => (
                <div
                    key={key}
                    style={{
                        marginBottom: "15px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                    }}
                >
                    <strong>
    {key.charAt(0).toUpperCase() + key.slice(1)}
</strong>
                    <p>{value}</p>
                </div>
            ))}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                }}
            >
                <button onClick={onEdit}>
                    Edit
                </button>

                <button
                    onClick={onSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </div>
        </div>
    );
}

export default ReviewPage;