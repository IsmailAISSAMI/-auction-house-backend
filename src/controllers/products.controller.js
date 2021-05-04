const firebase = require('../services/firebase.service');
const Product = require('../models/product.model');
const firestore = firebase.firestore();


exports.create = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('products').doc().set(data);
        res.send({
            message: 'Your new product was saved successfuly!',
            product: data
        });
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while creating the product!',
        });
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('products');
        const data = await products.get();
        const productsArray = [];
        if(data.empty) {
            res.status(404).send({
                error: 404,
                message: err.message || 'No product record was found!',
            });
        }else {
            data.forEach(doc => {
                const product = new Product(
                    doc.id,
                    doc.data().title,
                    doc.data().description,
                    doc.data().price,
                    doc.data().type,
                    doc.data().urlImg,
                    doc.data().timeLeft,
                    doc.data().createdAt
                );
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while getting the products!',
        });
    }
}