var http = require("http");
var express = require("express");
var socket = require("socket.io");

const RPS = require("./game-engine");

var port = 9000;
var app = express();
var server = http.createServer(app);

var dirPath = 'client';

app.use(express.static(dirPath));

var io = socket(server);

let waitingPlayer = null;

io.on("connection", function(sock)
{
	if(waitingPlayer)
	{
		new RPS(waitingPlayer, sock);

		waitingPlayer = null;
	}
	else
	{
		waitingPlayer = sock;
		waitingPlayer.emit('message', 'Waiting for opponent');
	}

	sock.on('message', function(text)
	{
		io.emit('message', text);
	});
});

server.on("error", function(err)
{
	console.error("Server error:", err);
});

server.listen(port, function()
{
	console.log("Listening on " + port);
});
