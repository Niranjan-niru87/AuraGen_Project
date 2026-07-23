const promptTemplate = `
Generate a simplified multi-step form.

JSON Format:

{
  "title": "string",
  "description": "string",
  "steps": [
    {
      "label": "string",
      "field": "string",
      "type": "text",
      "required": true
    }
  ]
}
`;

module.exports = promptTemplate;