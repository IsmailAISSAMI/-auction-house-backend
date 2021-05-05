const express = require('express');
const router = express.Router();

const productsRouter = require('./products.route');
const customersRouter = require('./customers.route');

router.use(productsRouter);
router.use(customersRouter);

module.exports = router;