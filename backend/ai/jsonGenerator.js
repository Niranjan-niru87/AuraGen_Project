function generateUI(telemetry) {

    return {

        title: "Registration Form",

        description: "Let's complete this step by step.",

        cognitiveScore: telemetry.cognitiveScore,

        steps: [

            {
                label: "Full Name",
                field: "fullName",
                type: "text",
                required: true
            },

            {
                label: "Email",
                field: "email",
                type: "email",
                required: true
            },

            {
                label: "Phone Number",
                field: "phone",
                type: "tel",
                required: false
            }

        ]
    };

}

module.exports = generateUI;