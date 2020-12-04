// saleController
const rescue = require('express-rescue');
const services = require('../services/saleServices');

const createSale = rescue(async (req, res) => {
  // console.log(itensSold);
  const sales = await services.createSale(req.body);
  return res.status(200).json(sales);
});

const getAllSales = rescue(async (_req, res) => {
  const itensSold = await services.getAllSales();
  // console.log({ sales: itensSold });
  return res.status(200).json({ sales: itensSold });
});
const getSaleById = rescue(async (req, res) => {
  const { id } = req.params;
  // const product = await services.getByIdProducts(id);
  const product = await services.getSoldById(id);
  if (!product) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found' } });
  }
  res.status(200).json(product);
});

module.exports = {
  getAllSales,
  createSale,
  getSaleById,
};
