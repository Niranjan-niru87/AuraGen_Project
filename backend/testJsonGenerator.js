require("dotenv").config();

const generateUI = require("./ai/jsonGenerator");


(async()=>{

const telemetry = {

mouseX:100,

mouseY:200,

clicks:8,

idleTime:6,

velocity:0.2,

cognitiveScore:82,

mode:"simplified",

reason:"High cognitive load",

formType:"registration"

};


const result = await generateUI(telemetry);


console.log(result);


})();