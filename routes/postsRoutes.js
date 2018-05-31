const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        res.json(posts)
    })
});

router.post('/add', (req, res) => {
    // data of the new post
    let post = new Post();
    post.title = req.body.title;
    post.description = req.body.description;
    post.price = req.body.price;
    post.purchasedAt = req.body.purchasedAt;

    if(!post.title){
        throw 'title is needed'
    }
    if(typeof(post.price) !== "number"){
        throw 'price must be a number'
    }

    post.save((err) => {
        if(err) throw err;
        res.redirect('/posts')
    })


});


router.put('/edit/:id', (req, res) => {

    Post.findById(req.params.id, (err, post) => {
        // data of the updated post
        post.title = req.body.title || post.title;
        post.description = req.body.description || post.description;
        post.price = req.body.price || post.price;
        post.purchasedAt = req.body.purchasedAt || post.purchasedAt;

        if(typeof(post.price) !== "number"){
            throw 'price must be a number'
        }

        post.save((err) => {
            if(err) throw err;
            res.redirect('/posts')
        })
    })

});


router.delete('/delete/:id', (req, res) => {

    Post.deleteOne({_id:req.params.id}, (err) => {
        if(err) throw err;
        res.redirect('/posts')
    })

});

module.exports = router;