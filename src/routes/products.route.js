const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controller');

//ROUTES FOR ADMIN
router.post('/products' ,product.create);
router.patch('/products/:id', product.update);
// router.delete('/products/:id', product.delete);

// ROUTES FOR USER LAMBDA
router.get('/products/', product.getProducts);
router.get('/products/:id', product.getProduct);

module.exports = router;