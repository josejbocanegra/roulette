const WebSocket = require("ws");

let clients = [];

const setWs = (server) => {
  console.log("In socket");
  const ws = new WebSocket.Server({ server });
  ws.on("connection", (ws) => {
    console.log("New socket connection");
    clients.push(ws);
  });
};

const notifyAll = (data) => {
  console.log("notify all");
  clients.forEach((ws) => ws.send(JSON.stringify(data)));
};

exports.setWs = setWs;
exports.notifyAll = notifyAll;
