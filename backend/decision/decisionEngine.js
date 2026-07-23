function analyzeTelemetry(data) {

    if (data.idleTime >= 10) {

        return {
            mode: "SIMPLIFIED",
            reason: "User is hesitating",
            formType: "simple"
        };

    }

    if (Number(data.velocity) < 0.5) {

        return {
            mode: "GUIDED",
            reason: "Mouse movement is slow",
            formType: "guided"
        };

    }

    return {

        mode: "NORMAL",
        reason: "User is comfortable",
        formType: "normal"

    };

}

module.exports = analyzeTelemetry;