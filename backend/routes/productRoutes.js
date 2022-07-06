import express, { request } from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  //console.log('cade o erro')
  const product = await Product.findOne({slug: req.params.slug});
  //const product = await Product.findOne({'$where' : {slug: req.params.slug}}); 
  //console.log(product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produto não encontrado' });
  }
});

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produto não encontrado' });
  }
});

export default productRouter;