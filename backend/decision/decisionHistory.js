const history = [];


function saveDecisionHistory(telemetry, decision) {

    const record = {

        cognitiveScore:
        telemetry.cognitiveScore,

        level:
        decision.level,

        mode:
        decision.mode,

        action:
        decision.action,

        timestamp:
        new Date().toISOString()

    };


    history.push(record);


    console.log(
        "✅ Decision History Saved"
    );


    console.log(record);

}



function getDecisionHistory(){

    return history;

}

function getHighAdaptationCount(){

    return history.filter(
        item =>
        item.level === "HIGH"
    ).length;

}


function getAdaptationCount(){

    return history.length;

}



module.exports = {

    saveDecisionHistory,

    getDecisionHistory,

    getAdaptationCount,

    getHighAdaptationCount

};