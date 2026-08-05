const { StructuredOutputParser } =
require("@langchain/core/output_parsers");


const parser =
StructuredOutputParser.fromNamesAndDescriptions({

title:"Form title",

description:"Form description",

steps:"Array of form steps"

});


module.exports = parser;