const productModel = require('../models/productModel');
const add = async (name, quantity) => {
  if (name.length < 5) {
    throw {
      err: {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
    };
  }

  if (quantity < 1) {
    throw {
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      },
    };
  }

  if (!Number.isInteger(quantity)){
    throw {
      err: {
        code: 'invalid_data',
        message: "\"quantity\" must be a number",
      },
    };
  }

  const isThisProductAlreaadyDocumented = await productModel.findProductByName(name);

  if(isThisProductAlreaadyDocumented) {
    throw {
      err: {
        code: 'invalid_data',
        message: "Product already exists",
      },
    };
  }

  return (addedProduct = await productModel.add(name, quantity));
};

module.exports = { add };
