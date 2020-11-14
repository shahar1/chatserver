const WebSocket = require('ws');

const ws = new WebSocket.Server({port: 8080});

ws.on("connection", (ws) => {
	ws.on("message",(message) => {
		console.log("Got message", JSON.parse(message));
	});
	console.log("Got message", ws);
})