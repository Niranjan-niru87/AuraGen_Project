const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");


const model = new ChatGoogleGenerativeAI({

    apiKey: process.env.GEMINI_API_KEY,

    model: "gemini-3.5-flash-lite",

    temperature: 0.2

});


module.exports = model;