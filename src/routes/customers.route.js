const express = require('express');
const router = express.Router();
const customer = require('../controllers/customers.controller');

//ROUTES FOR ADMIN
router.post('/customers' ,customer.create);
router.patch('/customers/:id', customer.update);
router.delete('/customers/:id', customer.delete);

// ROUTES FOR USER LAMBDA
router.get('/customers/', customer.getCustomers);
router.get('/customers/:id', customer.getCustomer);

module.exports = router;