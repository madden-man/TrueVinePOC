const MongoClient = require('mongodb').MongoClient;

module.exports = {
  getThreads: function() {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        client.db('chatdb').collection('threads', function(err, collection) {
          collection.find().toArray(function(err, items) {
            resolve(items);
          });
        });
      });
    });
  },
  getMessagesByThreadId: function(threadId) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        client.db('chatdb').collection('messages', function(err, collection) {
          collection.find({ threadId }).toArray(function(err, items) {
            resolve(items);
          })
        })
      });
    });
  },
  insertThread: function(data) {
    const threadId = Math.floor(Math.random() * 1000);
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
      client.db('chatdb').collection('threads', function(err, collection) {
        collection.insert({
          ...data,
          id: threadId,
        });
      });
    });
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
      client.db('chatdb').collection('messages', function(err, collection) {
        collection.insert({
          ...data.mostRecentMessage,
          threadId,
        });
      });
    });
  },
  insertMessage: function(message) {
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
      client.db('chatdb').collection('messages', function(err, collection) {
        collection.insert(message);
      });
    });
  }
};
