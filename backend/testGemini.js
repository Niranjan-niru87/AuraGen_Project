const ai = require("./ai/geminiClient");

async function testGemini() {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: "Say Hello from Gemini!"
        });

        console.log(response.text);

    } catch (error) {
        console.error("Gemini Error:", error);
    }
}

testGemini();