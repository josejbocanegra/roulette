var socket = require("socket.io");

var messages = [{
  id: 1,
  text: "Welcome",
  author: "Jose Bocanegra"
}];

function startConnection(server){
	var io = socket(server); 

	io.on('connection', function(socket) {
  		console.log('New connection to socket');
  		socket.emit('messages', messages);

  		socket.on('new-message', function(data) {
    		messages.push(data);
			io.sockets.emit('messages', messages);
  		});
	});
}
module.exports.startConnection = startConnection;


