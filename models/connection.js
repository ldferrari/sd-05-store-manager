const { MongoClient } = require('mongodb');

// const MONGO_DB_URL = 'mongodb://mongod:27017/StoreManager'
const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';
let connection = null;

const makeConnection = async (collectionName) => {
  connection = connection || (await MongoClient.connect(MONGO_DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }));
  return connection.db(DB_NAME).collection(collectionName);
};

module.exports = makeConnection;
