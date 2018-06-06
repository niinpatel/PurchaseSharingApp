const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
    User.find({username: req.params.username}, (err, user) => {
        if(err)
            res.send('user does not exist');
        res.send({user});  // page to display user profiles
        res.end()
    })
});
