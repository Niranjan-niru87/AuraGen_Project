const model = require("../langchain/llm.js");
const buildPrompt = require("./promptBuilder");
const validateForm = require("./validator");

async function generateUI(telemetry) {

    const prompt = buildPrompt(telemetry);

    try {

        const response = await model.invoke(prompt);


        let text = response.text.trim();


text = text
.replace("```json","")
.replace("```","")
.trim();

console.log("========== GROQ RAW RESPONSE ==========");
console.log(text);
console.log("=========================================");

const parsedForm = JSON.parse(text);

const isValid = validateForm(parsedForm);

if(!isValid){

    throw new Error(
        "AI Generated Form Validation Failed"
    );

}

console.log("✅ AI Form Validation Passed");

return parsedForm;

    } catch (error) {

        console.error(
    "❌ AI Generation Failed"
);

console.error(
    "Reason:",
    error.message
);
console.log(
    "⚠️ Using Safe Fallback UI"
);

        // Fallback JSON
        return {

    title: "Registration Form",

    description:
    "Let's complete this step by step.",

    cognitiveScore:
    telemetry.cognitiveScore,

    aiStatus:"fallback",

    aiMessage:
    "AI service unavailable. Using safe adaptive UI.",

    steps:[

        {
            label:"Full Name",
            field:"fullName",
            type:"text",
            required:true
        },

        {
            label:"Email",
            field:"email",
            type:"email",
            required:true
        }

    ]

};

    }

}

module.exports = generateUI;