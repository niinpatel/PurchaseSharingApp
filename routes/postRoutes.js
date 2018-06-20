const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');
router.use(ensureAuthenticated);



router.route('/add')
    .get(async(req, res) => {
        res.render('add_post', {username: req.user.username})
    })
    .post(async(req, res) => {
    let newPost = new Post(req.body);

    newPost.posted_by = await User.findOne({username: req.user.username});
    
    await newPost.save();

    res.json(newPost)
});

router.get('/all', async(req, res) => {
    let all_posts = await Post.find({});

    res.render('all_posts', {posts: all_posts, username: req.user.username})
});


router.post('/like', async(req, res) => {
    console.log(req.body)
});







function ensureAuthenticated(req, res, next ){

    if(req.isAuthenticated()){

        return next();

    } else {
        req.flash('danger', 'Please Login ');
        res.redirect('/login');
    }
}


module.exports = router;