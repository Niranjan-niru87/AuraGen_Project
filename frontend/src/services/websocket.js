let socket;

let retryCount = 0;

const maxRetries = 5;


function connectSocket(){


socket = new WebSocket(
"wss://auragen-project.onrender.com"
);



socket.onopen = () => {

console.log(
"✅ Connected to AuraGen Backend"
);

retryCount = 0;

};



socket.onmessage = (event)=>{

console.log(
"📩 Backend:",
event.data
);

};



socket.onerror = (error)=>{

console.error(
"❌ WebSocket Error:",
error
);

};



socket.onclose = ()=>{


if(retryCount < maxRetries){


retryCount++;


console.log(
`⚠️ Reconnecting... Attempt ${retryCount}`
);



setTimeout(()=>{

connectSocket();

},3000);



}

else{


console.log(
"❌ Unable to reconnect to backend"
);


}


};


return socket;

}


export default connectSocket();