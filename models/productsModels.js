const { ObjectId } = require('mongodb');
const connection = require('./connections');

const getAll = async () => connection('products').then((products) => products.find({}).toArray());

const cadastro = async (name, quantity) => {
  connection('products').then((products) =>
    products.insertOne({ name, quantity }).then((result) => ({
      _id: result.insertedId,
      name,
      quantity,
    })));
};

const idSearch = async (id) =>
  connection('products').then((products) => (ObjectId.isValid(id) ? products.findOne({ _id: ObjectId(id) }) : null));

const nameSearch = async (name) =>
  connection('products').then((products) => products.find({ name }).toArray());

module.exports = { getAll, cadastro, nameSearch, idSearch };
