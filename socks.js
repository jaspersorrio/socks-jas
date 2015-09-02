var io = require('socket.io')(1337);
var i = 0;
var connectedUsers = [];

io.on('connection', function (socket) {
  socket.emit('first connection', connectedUsers);

  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });

  socket.on("register name", function(name){
    connectedUsers.push(name);
    io.emit('add user', name.name);
  });
});