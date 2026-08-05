const promptTemplate = `

Generate an adaptive form JSON.

IMPORTANT:
Return ONLY JSON.
No markdown.
No explanation.

Required JSON structure:

{
"title":"string",
"description":"string",
"cognitiveScore":number,

"steps":[
{
"label":"string",
"field":"string",
"type":"text",
"required":true
}
]

}


Rules:

1. If mode is SIMPLIFIED:
- Reduce fields
- Keep only important information
- Maximum 2 steps


2. If mode is GUIDED:
- Add helper descriptions


3. If mode is NORMAL:
- Create normal registration form


`;

module.exports = promptTemplate;