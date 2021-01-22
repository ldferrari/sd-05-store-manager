const { ObjectId } = require('mongodb');
const productsModel = require('../models/productsModel');

const create = async (name, quantity) => {
  if (!name || name.length < 5) {
    throw {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    };
  }
  if (quantity < 1) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    };
  }
  if (!Number.isInteger(quantity)) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be a number',
    };
  }
  const productExist = await productsModel.findName(name);
  if (productExist) {
    throw {
      code: 'invalid_data',
      message: 'Product already exists',
    };
  }
  return productsModel.create(name, quantity);
};

const AllProducts = async () => productsModel.AllProducts();

const findId = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw {
      code: 'invalid_data',
      message: 'Wrong id format',
    };
  }
  return productsModel.findId(id);
};

const updateProduct = async (id, name, quantity) => {
  if (name.length < 5) {
    throw {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    };
  }
  if (quantity < 1) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    };
  }
  if (!Number.isInteger(quantity)) {
    throw {
      code: 'invalid_data',
      message: '"quantity" must be a number',
    };
  }
  return productsModel.updateProduct(id, name, quantity);
};

const deleteProduct = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw {
      code: 'invalid_data',
      message: 'Wrong id format',
    };
  }
  return productsModel.deleteProduct(id);
};

module.exports = {
  create,
  AllProducts,
  findId,
  updateProduct,
  deleteProduct,
};
