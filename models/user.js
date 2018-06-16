const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/[a-z\-_.]{1,70}/, 'no special characters allowed']
},
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    profile_pic: String,
    followers: [{type: ObjectID, ref: 'User'}],
    following:[{type: ObjectID, ref: 'User'}],
    shops_followed: [{type: ObjectID, ref: 'Shop'}],
    categories_followed: [{type: ObjectID, ref: 'Category'}],
    favorite_posts: [{type: ObjectID, ref: 'Post'}],
    joined: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);