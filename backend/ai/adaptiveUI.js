const chain = require("../langchain/chain");


async function generateAdaptiveUI(telemetry, decision) {


    const input = {

        ...telemetry,

        mode: decision.mode,

        formType: decision.formType,

        reason: decision.reason

    };


    try {


        const result = await chain.invoke(input);


        console.log(
            "========== LANGCHAIN RESPONSE =========="
        );

        console.log(result);


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