function DynamicInput({ field, value, onChange }) {

const handleFocus = () => {

console.log(
"User interacting with field:",
field.field
);


localStorage.setItem(
"auraGenCurrentField",
field.field
);


window.dispatchEvent(
new CustomEvent(
"auraFieldFocus",
{
detail:{
field:field.field
}
}
)
);

};


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

onFocus={handleFocus}

onChange={onChange}

style={{
    width:"300px",
    padding:"10px",
    marginTop:"5px"
}}

/>


</div>

);

}

export default DynamicInput;