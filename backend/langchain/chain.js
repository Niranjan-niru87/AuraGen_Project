const model = require("./llm");
const prompt = require("./prompt");
const parser = require("./outputParser");


const chain = prompt
    .pipe(model)
    .pipe(parser);


module.exports = chain;