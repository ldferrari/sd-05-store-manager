const { ObjectId } = require('mongodb');
const getCollection = require('./connection');

const createSales = async (itensSold) =>
  getCollection('sales')
    .then((sales) => sales.insertOne({ itensSold }))
    .then((result) => result.ops[0]);

const AllSales = async () =>
  getCollection('sales')
    .then((sales) => sales.find().toArray());

const findIdSale = async (id) =>
  getCollection('sales')
    .then((sale) => sale.findOne(ObjectId(id)));

const updateSales = async (id, bodySales) => {
  getCollection('sales')
    .then((sales) =>
      sales.updateOne({ _id: ObjectId(id) }, { $set: { itensSold: bodySales } }));
  const updatedSales = { _id: id, itensSold: bodySales };
  return updatedSales;
};

const deleteSale = async (id) =>
  getCollection('sales')
    .then((sale) => sale.findOneAndDelete({ _id: ObjectId(id) }));

module.exports = {
  createSales,
  AllSales,
  findIdSale,
  updateSales,
  deleteSale,
};
