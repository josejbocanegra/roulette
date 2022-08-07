let socket_io = require("socket.io");
var io = socket_io();
var socketApi = {};

socketApi.io = io;

let messages = [{
    id: 1,
    text: "Welcome to chat room",
    author: "Chat admin"
}];


io.on('connection', function (socket) {
    socketApi.sendNotification();
    socket.on("new-message", data => {
        socketApi.sendNotification(data)
    })
});

socketApi.sendNotification = data => {
    if (data) {
        messages.push(data);
    }
    io.sockets.emit('messages', messages);
}






let Mongo = require("./db/Mongolib");

function getData(callback) {
    Mongo.getDatabase((db, client) => {
        const collection = db.collection("messages");
        collection.find({}).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs);
            callback(docs, client);
        });
    });
}

function insertData(data, callback) {
    Mongo.getDatabase((db, client) => {
        const collection = db.collection("messages");
        collection.insertMany([data], function (err, result) {
            console.log("Inserted 1 document into the collection");
            callback(client, result);
        });
    });
}

module.exports = socketApi;

