var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('turn on', function(msg){
    console.log('Turning on LED: ' + msg);
  });

  socket.on('turn off', function(msg){
    console.log('Turning off LED: ' + msg);
  });

  socket.on('get info', function(msg){
    io.emit('sensor info', 'no info found');
  });

  socket.on('chatroom', function(msg){
    console.log(msg);
    io.emit('chatroom', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
