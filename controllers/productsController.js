const { Router } = require('express');
const productsService = require('../service/productsService');

const routerProducts = Router();

routerProducts.post('/', async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const newProduct = await productsService.create(name, quantity);
    res.status(201).json(newProduct);
  } catch (err) {
    if (err.code === 'invalid_data') {
      return res.status(422).json({ err });
    }
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

routerProducts.get('/', async (_req, res) => {
  try {
    const products = await productsService.AllProducts();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

routerProducts.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Findproduct = await productsService.findId(id);
    res.status(200).json(Findproduct);
  } catch (err) {
    if (err.code === 'invalid_data') {
      return res.status(422).json({ err });
    }
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

routerProducts.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const productUpdated = await productsService.updateProduct(id, name, quantity);
    res.status(200).json(productUpdated);
  } catch (err) {
    if (err.code === 'invalid_data') {
      return res.status(422).json({ err });
    }
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

routerProducts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const productDelected = await productsService.deleteProduct(id);
    res.status(200).json(productDelected);
  } catch (err) {
    if (err.code === 'invalid_data') {
      return res.status(422).json({ err });
    }
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = routerProducts;
