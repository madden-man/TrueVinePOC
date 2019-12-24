const MongoClient = require('mongodb').MongoClient;

module.exports = {
  getThreads: function() {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017/chatdb', function(err, client) {
        client.db('chatdb').collection('threads', function(err, collection) {
          collection.find().toArray(function(err, items) {
            console.log(items);
            resolve(items);
          });
        });
      });
    });
  },
  getMessagesByThreadId: function(threadId) {
    MongoClient.connect('mongodb://localhost:27017/chatdb', function(err, client) {
      client.db('chatdb').collection('messages', function(err, collection) {
        collection.find({ threadId }).toArray(function(err, items) {
          return items;
        })
      })
    });
  },
  insertMessage: function(message) {
    MongoClient.connect('mongodb://localhost:27017/chatdb', function(err, client) {
      client.db('chatdb').collection('messages', function(err, collection) {
        collection.insert(message);
      });
    });
  }
}
