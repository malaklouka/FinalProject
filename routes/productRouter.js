const express = require('express');
const Product = require('../models/productModel');
const productRouter = express.Router();

productRouter.get('/', (async (req, res) => {
    const products = await Product.find({});
    res.send( products );
}))


productRouter.get('/:id', (async (req, res) => {
    const product = await Product.findById(req.params.id);
    //check condition
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
})
);
module.exports = productRouter;