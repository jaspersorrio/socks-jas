var io = require('socket.io')(1337);

io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});

  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('clickedEvent', function(){
  	io.emit('newClient', {updateClient : true});
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});