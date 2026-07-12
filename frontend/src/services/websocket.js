const socket = new WebSocket("ws://localhost:5000");

socket.onopen = () => {
  console.log("✅ Connected to AuraGen Backend");
};

socket.onmessage = (event) => {
  console.log("📩 Backend:", event.data);
};

socket.onerror = (error) => {
  console.error("WebSocket Error:", error);
};

socket.onclose = () => {
  console.log("Connection Closed");
};

export default socket;