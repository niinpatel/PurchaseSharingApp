const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport')


router.route('/login')
    .get(async(req, res) => {
        res.render('login')
    })
    .post(async(req,res,next) => {

        passport.authenticate('local', {

            successRedirect: '/post/add' ,
            failureRedirect: '/login',
            failureFlash: true
        })(req,res,next);

    });


router.route('/logout')
    .post(async(req, res) => {
        req.logout();
        req.flash('success' , "Peace Out! ");
        res.redirect('/login');
    })

router.route('/register')
    .get(async(req, res) => {
        res.render('register.ejs')
    })
    .post(async(req, res) => {
        let newUser = new User(req.body)

        newUser.password = await bcrypt.hash(req.body.password, 10);
        try {
            await newUser.save()
        } catch (err) {
            res.status(400).send(err)
        }

        res.json(newUser)
    });


module.exports = router;