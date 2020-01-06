var http = require("http");
var express = require("express");
var socket = require("socket.io");

var port = 9000;
var app = express();
var server = http.createServer(app);

app.use(express.static("static"));

var io = socket(server);

io.on("connection", function(sock){
	console.log("Someone connected");
	sock.emit("message", "You have connected!");
});

/*server.error("error", function(err){
	console.error("Server error:", err);
});*/

server.listen(port, function(){
	console.log("Listening on " + port);
});
