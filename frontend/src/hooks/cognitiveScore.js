export function calculateCognitiveScore(
    clicks,
    idleTime,
    velocity
){

    let score = 0;

    score += clicks * 5;

    score += idleTime * 3;


    if(Number(velocity) < 1){
        score += 20;
    }


    return Math.min(
        100,
        Math.round(score)
    );

}