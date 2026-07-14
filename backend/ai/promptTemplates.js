const uiGenerationTemplate = `
The user is struggling to complete a complex form.

Analyze the telemetry data.

Your goal is to redesign the interface into a simpler step-by-step wizard.

Requirements:

1. Keep all required fields.

2. Break the form into logical steps.

3. Use beginner-friendly labels.

4. Minimize cognitive load.

5. Return ONLY valid JSON.

JSON Format:

{
  "title": "",
  "description": "",
  "steps": [
    {
      "label": "",
      "field": "",
      "required": true
    }
  ]
}
`;

module.exports = uiGenerationTemplate;