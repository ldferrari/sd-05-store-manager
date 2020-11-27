const { ObjectId } = require('mongodb');
const model = require('../models/productModel');

const create = async (name, quantity) => {
  if (typeof name !== 'string') {
    throw {
      code: 'invalid_data',
      message: 'product name must be a string',
    };
  }
  if (name.length < 5) {
    throw {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    };
  }
  const cProduct = await model.checkProduct(name);
  if (cProduct) {
    throw {
      code: 'invalid_data',
      message: 'Product already exists',
    };
  }
  if (quantity <= 0) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    };
  }
  if (typeof quantity !== 'number') {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be a number',
    };
  }
  return model.create(name, quantity);
};
const getAll = async () => {
  const products = await model.getAll();
  return products;
};

const getById = async (id) => {
  const product = await model.getById(id);
  if (!product) {
    throw {
      code: 'invalid_data',
      message: 'Wrong id format',
    };
  }
  return product;
};
const update = async (id, name, quantity) => {
  if (name.length < 5) {
    throw {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    };
  }
  if (quantity <= 0) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    };
  }
  if (typeof quantity !== 'number') {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be a number',
    };
  }
  await model.update(id, name, quantity);
  return { _id: ObjectId(id), name, quantity };
};
module.exports = {
  create,
  getAll,
  getById,
  update,
};
