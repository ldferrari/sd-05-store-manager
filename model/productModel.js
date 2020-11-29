const { ObjectId } = require('mongodb');
const getCollection = require('./get-collection');

const create = async (name, quantity) =>
  getCollection('products')
    .then((product) => product.insertOne({ name, quantity }))
    .then((result) => ({ _id: result.insertedId, name, quantity }));

const hasProduct = async (productName) =>
  getCollection('products').then((product) => product.findOne({ name: productName }));

const getAllProducts = async () =>
  getCollection('products').then((products) => products.find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('products').then((products) => products.findOne(ObjectId(id)));
};

const update = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return null;
  return getCollection('products').then((products) =>
    products.updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));
};

module.exports = {
  create,
  getById,
  update,
  hasProduct,
  getAllProducts,
};
