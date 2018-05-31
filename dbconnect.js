const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/shop-socially', (err) => {
    if(err) throw err;
    console.log('Connected To Database')
});