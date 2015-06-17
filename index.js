var express = require('express');
var app = express();
var http = require('http');
server = http.createServer(app);
server.listen(process.env.PORT || 3000);

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Instagram.set('callback_url', 'http://08083275.ngrok.io');

// Instagram = require('instagram-node-lib');

Instagram.set('client_id', process.env.INSTAGRAM_CLIENT_KEY);
Instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);


app.get('/', function (req, res) {
	res.render('index');
});


// var io = require('socket.io').listen(server);
// 	io.sockets.on('connect', function (socket) {
// 		console.log('connection working');
// 	// socket.emit('connected');
// });

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    socket.emit('connected');
});
