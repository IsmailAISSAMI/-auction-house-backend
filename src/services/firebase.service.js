const firebase = require("firebase");
const config = require("../configs/general.cofing");

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;
