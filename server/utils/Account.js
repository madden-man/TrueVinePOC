const MongoClient = require('mongodb').MongoClient;

module.exports = {
  getAccounts: function() {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        client.db('users').collection('accounts', function(err, collection) {
          collection.find().toArray(function(err, items) {
            resolve(items);
          });
        });
      });
    }).then(function(result) {
      return result;
    })
  },
  getAccount: function(username) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        client.db('users').collection('accounts', function(err, collection) {
          resolve(collection.find({ username }));
        });
      });
    }).then(function(result) {
      return result.next();
    });
  },
  insertAccount: function(account) {
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
      client.db('users').collection('accounts', function(err, collection) {
        collection.insert(account);
      });
    });
  }
}
