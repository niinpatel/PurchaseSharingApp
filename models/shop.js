const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const shopSchema = new Schema({
    name: String,
    address: String,
    location: [Number, Number],
    city: String,
    followers: [{type: ObjectID, ref: 'User'}],
    posts: [{type: ObjectID, ref: 'Post'}]
});

module.exports = mongoose.model('Shop', shopSchema);