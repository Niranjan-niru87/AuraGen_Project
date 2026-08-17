const { ChatGroq } = require("@langchain/groq");

const model = new ChatGroq({

    apiKey: process.env.GROQ_API_KEY,

    model: "openai/gpt-oss-20b",

    temperature: 0

});

module.exports = model;