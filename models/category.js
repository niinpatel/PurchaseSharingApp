const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const categorySchema = new Schema({
    name: String,
    followers: [{type: ObjectID, ref: 'User'}],
    posts: [{type: ObjectID, ref: 'Post'}]

});

module.exports = mongoose.model('Category', categorySchema);