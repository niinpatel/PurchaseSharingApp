const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const router = express.Router();


router.get('/', (req, res) => {

    Post.find({}, (err, posts) => {
        res.send([posts])  // display all posts to user news feed sort of
    })

});

router.get('/login', (req, res) => {
    // login route get method
    res.send("this is login page");
    res.end()
});

router.post('login', (req, res) => {
    // login route post method
});

router.get('/register', (req, res) => {
    // register route get method
    res.send('this is register method')

});

router.post('/register', (req, res) => {
    // register route post method
});



