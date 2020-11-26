const { MongoClient } = require('mongodb');

// const DB_URL = 'mongodb://mongodb:27017/StoreManager';
const DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';

let connection;

const getCollection = async (collectionName) => {
  connection = connection || (await MongoClient.connect(DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }));

  return connection.db(DB_NAME).collection(collectionName);
};

module.exports = getCollection;
