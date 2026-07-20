const ai = require("./ai/geminiClient");

async function testGemini() {
  try {
    const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "Say only: AuraGen AI Connected Successfully",
    });

    console.log(response.text);
  } catch (error) {
    console.error(error);
  }
}

testGemini();