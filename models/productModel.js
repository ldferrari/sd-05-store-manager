const getCollection = require('./get-Collection');
const { ObjectId } = require('mongodb');

const add = async (name, quantity) =>
  getCollection('products')
    .then((products) => products.insertOne({ name, quantity }))
    .then((result) => ({ _id: result.insertedId, name, quantity }));

const findProductByName = async (name) =>
  getCollection('products').then((products) => products.findOne({ name }));

const getAll = async () => getCollection('products').then((products) => products.find().toArray());

const findById = async (id) => getCollection('products').then((res) => res.findOne(ObjectId(id)));

module.exports = { add, findProductByName, getAll, findById };