const bcrypt = require('bcrypt');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const accountUtils = require('./utils/Account');
const chatUtils = require('./utils/Chat');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

let users = [];

io.on('connection', function (socket) {
  console.log('new user!');
  let sessionId = Math.floor(Math.random() * 10000);
  users.push({
    userId: '',
    sessionId,
  });

  chatUtils.getThreads().then(function(threadResult) {
    if (threadResult[0]) {
      chatUtils.getMessagesByThreadId(threadResult[0].id).then(function(messageResult) {
        socket.emit('initial_data', {
          threads: threadResult,
          messages: messageResult,
        });
      });
    }
  });

  socket.on( 'new_notification', function( data ) {
    chatUtils.insertMessage(data);

    chatUtils.getThreads().then(function(threads) {
      io.sockets.emit('show_notification', {
        message: data,
        threads,
      });
    });
  });

  socket.on('thread_selected', function( data, callback ) {
    chatUtils.getMessagesByThreadId(data).then(function(messages) {
      callback(messages);
    });
  });

  socket.on('account_created', function( data ) {
    bcrypt.hash(data.password, 10, function(err, hash) {
      accountUtils.insertAccount({
        ...data,
        password: hash,
      });
    });
  });

  socket.on('attempted_login', function( data, callback ) {
    accountUtils.getAccount(data.username).then(function(userInfo) {
      console.log(userInfo);
      if (userInfo && userInfo.username) {
        bcrypt.compare(data.password, userInfo.password, function(err, res) {
          if(res) {
           // Passwords match
           delete userInfo.password;

           callback({
             ...userInfo,
             sessionId,
           });
          } else {
           // Passwords don't match
          } 
        });
      }
    });
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8080, function() {
  console.log('listening on localhost:8080');
});
