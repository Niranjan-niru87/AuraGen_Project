const ai = require("./geminiClient");
const buildPrompt = require("./promptBuilder");

async function generateUI(telemetry) {

    const prompt = buildPrompt(telemetry);

    try {

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        const text = response.text.trim();

console.log("========== GEMINI RAW RESPONSE ==========");
console.log(text);
console.log("=========================================");

return JSON.parse(text);

    } catch (error) {

        console.error("Gemini Error:", error);

        // Fallback JSON
        return {

            title: "Registration Form",

            description: "Let's complete this step by step.",

            cognitiveScore: telemetry.cognitiveScore,

            steps: [

                {
                    label: "Full Name",
                    field: "fullName",
                    type: "text",
                    required: true
                },

                {
                    label: "Email",
                    field: "email",
                    type: "email",
                    required: true
                }

            ]

        };

    }

}

module.exports = generateUI;