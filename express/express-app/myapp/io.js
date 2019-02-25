var socket = require("socket.io");

var messages = [{
  id: 1,
  text: "Hola soy un mensaje",
  author: "Carlos Azaustre"
}];

function startConnection(server){
	var io = socket(server); 

	io.on('connection', function(socket) {
  		console.log('Alguien se ha conectado con Sockets');
  		socket.emit('messages', messages);

  		socket.on('new-message', function(data) {
    		messages.push(data);
			io.sockets.emit('messages', messages);
  		});
	});
}
module.exports.startConnection = startConnection;