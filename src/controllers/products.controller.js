const firebase = require('../services/firebase.service');
const Product = require('../models/product.model');
const firestore = firebase.firestore();


exports.create = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('products').doc().set(data);
        res.send('Record saved successfuly!');
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'some error occured while creating the product!',
          });
    }
};