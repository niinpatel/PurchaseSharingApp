const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true,
        match: /^[a-z0-9._-]{4,35}$/i
    },
    password: {
        type:String
    }

});


module.exports = mongoose.model('User', userSchema);

