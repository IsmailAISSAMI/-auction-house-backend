const firebase = require('../services/firebase.service');
const Customer = require('../models/customer.model');
const firestore = firebase.firestore();


exports.create = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('customers').doc().set(data);
        res.send({
            message: 'Your new customer was saved successfuly!',
            customer: data
        });
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while creating the new customer register!',
        });
    }
};


exports.getCustomers = async (req, res, next) => {
    try {
        const customers = await firestore.collection('customers');
        const data = await customers.get();
        const customersArray = [];
        if(data.empty) {
            res.status(404).send({
                error: 404,
                message: err.message || 'No customers record was found!',
            });
        }else {
            data.forEach(doc => {
                const customer = new Customer(
                    doc.id,
                    doc.data().lastName,
                    doc.data().firstName,
                    doc.data().phoneNumber,
                    doc.data().city,
                    doc.data().country,
                    doc.data().zip,
                    doc.data().email,
                    doc.data().password,
                    doc.data().orders
                );
                customersArray.push(customer);
            });
            res.send(customersArray);
        }
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while getting the customers!',
        });
    }
}



exports.getCustomer = async (req, res, next) => {
    try {
        const id = req.params.id;
        const customer = await firestore.collection('customers').doc(id);
        const data = await customer.get();
        if(!data.exists) {
            res.status(404).send({
                error: 404,
                message: err.message || 'Customer with the given ID not found! try again.',
            });
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while getting the customer data!',
        });
    }
}

exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const customer =  await firestore.collection('customers').doc(id);
        await customer.update(data);
        const newData = await customer.get();

        res.send({
            message: 'Customer record was updated successfuly!',
            customer: newData.data()
        });        
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while updating the customer!',
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('customers').doc(id).delete();
        res.send({
            message: 'The customer was deleted successfuly!'
        });
    } catch (error) {
        res.status(400).send({
            error: 400,
            message: err.message || 'Some error occured while deleting the customer!',
        });
    }
}