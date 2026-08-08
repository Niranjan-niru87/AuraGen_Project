const { StructuredOutputParser } =
require("@langchain/core/output_parsers");

const { z } = require("zod");


const parser =
StructuredOutputParser.fromZodSchema(

z.object({

title:z.string(),

description:z.string(),

cognitiveScore:z.number(),

steps:z.array(

z.object({

label:z.string(),

field:z.string(),

type:z.string(),

required:z.boolean()

})

)

})

);


module.exports = parser;