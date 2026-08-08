function analyzeTelemetry(data) {

    const score = Number(data.cognitiveScore);
    const decisionHistory =
require("./decisionHistory");


const previousHighCount =
decisionHistory.getHighAdaptationCount();

console.log(
    "Previous High Adaptations:",
    previousHighCount
);


    console.log(
        "Cognitive Score:",
        score
    );


    // High confusion
    if(
    score >= 70 ||
    previousHighCount >= 3
){

        return {

            level:"HIGH",

            mode:"SIMPLIFIED",

            action:"REDUCE_COGNITIVE_LOAD",

            reason:
            "High cognitive load detected",

            confidence:
            score,

            formType:"simple",

            adaptive:true,

            shouldGenerateAI:true

        };

    }



    // Medium confusion
    if(score >= 40){

        return {

            level:"MEDIUM",

            mode:"GUIDED",

            action:"PROVIDE_ASSISTANCE",

            reason:
            "User needs assistance",

            confidence:
            score,

            formType:"guided",

            adaptive:true,

            shouldGenerateAI:true

        };

    }



    // Normal user
    return {

        level:"LOW",

        mode:"NORMAL",

        action:"KEEP_CURRENT_UI",

        reason:
        "User is comfortable",

        confidence:
        100 - score,

        formType:"normal",

        adaptive:false,

        shouldGenerateAI:false

    };

}


module.exports = analyzeTelemetry;