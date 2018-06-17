const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const postSchema = new Schema({

    posted_by: {type: ObjectID, ref: 'User'},
    created_date: {type: Date, default: Date.now},
    title: {type: String, required: true},
    image: {type: String},
    description: {type: String},
    price: {type: Number},
    review: {type: String},
    shop_name: {
        name: String,
        address: String,
        location: [Number, Number],
        city: String
    }, //{type: ObjectID, ref: 'Shop'},
    category: {type: ObjectID, ref: 'Category'},
    favorites: [{type: ObjectID, ref: 'User'}],
    comments: [{text: {type: String, required: true}, created_date: {type: Date, default:Date.now}, posted_by:{type: ObjectID, ref: 'User'}}]

});

module.exports = mongoose.model('Post', postSchema);