const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var mongoUtils = require('./MongoUtils');

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('new user!');

  const threads = mongoUtils.getThreads();
  console.log(threads);
  socket.emit('initial_data', threads);

  socket.on( 'new_notification', function( data ) {
    console.log(data);

   // mongoUtils.insertMessage(data);

    const threads = mongoUtils.getThreads();
    io.sockets.emit( 'show_notification', {
      message: data,
      threads,
    });
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8080, function() {
   console.log('listening on localhost:8080');
});
