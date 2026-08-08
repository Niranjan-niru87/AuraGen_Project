require("dotenv").config();


const genAI = new GorqGenerativeAI(process.env.groq_API_KEY);

async function listModels() {
  try {
    const response = await fetch(
      `https://generativelanguage.@groqapis.com/v1beta/models?key=${process.env.GROQ_API_KEY}`
    );

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

listModels();