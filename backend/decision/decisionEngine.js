function analyzeTelemetry(data) {


    const score = Number(data.cognitiveScore);


    console.log(
        "Cognitive Score:",
        score
    );


    // High confusion

    if(score >= 70){

        return {

            mode:"SIMPLIFIED",

            reason:
            "High cognitive load detected",

            formType:"simple",

            adaptive:true

        };

    }



    // Medium confusion

    if(score >= 40){

        return {

            mode:"GUIDED",

            reason:
            "User needs assistance",

            formType:"guided",

            adaptive:true

        };

    }



    // Normal

    return {

        mode:"NORMAL",

        reason:
        "User is comfortable",

        formType:"normal",

        adaptive:false

    };


}


module.exports = analyzeTelemetry;