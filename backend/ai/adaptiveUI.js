const chain = require("../langchain/chain");


async function generateAdaptiveUI(telemetry, decision) {


    const input = {

    ...telemetry,

    mode: decision.mode,

    formType: decision.formType,

    reason: decision.reason,

    currentStep:
        telemetry.formContext?.currentStep ?? 0,

    totalSteps:
        telemetry.formContext?.totalSteps ?? 0,

    completedFields:
        telemetry.formContext?.completedFields ?? [],

    formData:
        telemetry.formContext?.formData ?? {}

};


    try {


        const result = await chain.invoke(input);


        console.log(
            "========== LANGCHAIN RESPONSE =========="
        );

        console.log(result);


const validation = validateComponents(result);


console.log(
    "========== COMPONENT VALIDATION =========="
);

console.log(validation);



if(!validation.valid){

    console.log(
        "❌ Invalid UI Generated. Using fallback."
    );


    return {

        title:"Registration Form",

        description:
        "Let's complete this step by step.",


        steps:[

            {
                label:"Full Name",
                field:"fullName",
                type:"text",
                required:true
            }

        ]

    };

}


console.log(
    "✅ Component Validation Passed"
);


return result;


    } catch(error) {


        console.error(
            "LangChain Error:",
            error
        );


        return {

            title:"Registration Form",

            description:
            "Let's complete this step by step.",


            steps:[

                {
                    label:"Full Name",
                    field:"fullName",
                    type:"text",
                    required:true
                }

            ]

        };

    }

}


module.exports = generateAdaptiveUI;