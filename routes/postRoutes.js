const express = require('express');
const router = express.Router()
const Post = require('../models/post')
router.use(ensureAuthenticated);


router.get('/add', (req, res) => {
    res.render(addpost)
} )


function ensureAuthenticated(req, res, next ){

    if(req.isAuthenticated()){

        return next();

    } else {
        req.flash('danger', 'Please Login ');
        res.redirect('/login');
    }
}


module.exports = router;