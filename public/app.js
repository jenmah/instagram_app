// var socket = io();

// 	socket.on('connect', function() {
// 		console.log('Connected!');

// 	});

var socket = io.connect('http://localhost:3000/');
socket.on('connected', function() {
   alert("Connected!");
});