function analyzeFriction(telemetry) {

    const {
        clicks = 0,
        idleTime = 0,
        velocity = 0,
        currentField = null,
        fieldAttempts = 0,
        fieldErrors = 0
    } = telemetry;


    let frictionScore = 0;


    // 5 clicks = user may be struggling
    if(clicks >= 5){
    frictionScore += 30;
    }


    // User stuck
    if(idleTime >= 15){
        frictionScore += 25;
    }


    // Erratic movement
    if(velocity >= 2){
        frictionScore += 20;
    }


    // Field struggle
    if(fieldAttempts >= 3){
        frictionScore += 15;
    }


    // Validation errors
    if(fieldErrors >= 2){
        frictionScore += 10;
    }


    let level = "LOW";


    if(frictionScore >= 70){
        level = "HIGH";
    }
    else if(frictionScore >= 40){
        level = "MEDIUM";
    }


    return {

        frictionScore,

        level,

        isFrustrated:
            frictionScore >= 40,

        frictionPoint: {

            field:
                currentField || "unknown",

            reason:
                generateReason(
                    clicks,
                    idleTime,
                    fieldErrors
                )

        }

    };

}


function generateReason(
    clicks,
    idleTime,
    fieldErrors
){

    if(clicks >= 5){
        return "Repeated clicking detected";
    }


    if(idleTime >= 15){
        return "User inactivity detected";
    }


    if(fieldErrors >= 2){
        return "Multiple validation failures";
    }


    return "Normal interaction";
}


module.exports = analyzeFriction;