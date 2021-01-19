// acesso ao banco

const connectionDB = require('./connection');

const productCreate = async (name, quantity) => connectionDB('products')
  .then((db) => db.insertOne({ name, quantity }))
  .then((result) => ({ _id: result.insertedId, name, quantity }));

const getAllProducts = async () => connectionDB('products')
  .then((db) => db.find().toArray());

const getByNameProducts = async (name) => connectionDB('products')
  .then((db) => db.findOne({ name }));

module.exports = { getAllProducts, productCreate, getByNameProducts };
