const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findByName = async (name) =>
  connection()
    .then((db) => db.collection('products').findOne({ name }));

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection()
    .then((db) => db.collection('products').findOne(ObjectId(id)));
};

const findAll = async (collection) => {
  connection()
    .then((db) => db.collection(collection).find().toArray());
};

const productUpdate = async (id, name, quantity) =>
  connection()
    .then((db) => db.collection('products').updateOne(
      { _id: ObjectId(id) },
      { $set: { name, quantity } },
    ));

module.exports = {
  findById,
  findByName,
  findAll,
  productUpdate,
};
