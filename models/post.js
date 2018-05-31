const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String
    },
    price: {
        type: Number
    },
    purchasedAt: {
        type:String
    }

});


module.exports = mongoose.model('Post', postSchema);