const { Router } = require('express');
const controllers = require('../controllers/index');

const productRouter = Router();

productRouter.post('/', controllers.product.addProduct);

module.exports = productRouter;