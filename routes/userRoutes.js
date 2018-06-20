const router = require('express').Router();
const User = require('../models/user');
router.use(ensureAuthenticated);


router.route('/profile/:id')
    .get(async(req, res) => {
        res.json(await User.findById(req.params.id))
    });


router.route('/follow/:id')
    .get(async(req, res) => {

        let follower = await User.findById(req.user.id);
        let followed = await User.findById(req.params.id);

        if(followed.followers.find(user => user == follower.id)){
            res.send('You are already following this user');
            res.end()
        }

        try{
            await User.update(follower, {$push: {following: followed}} );
            await User.update(followed, {$push: {followers: follower}} );
        } catch (e) {
            res.status(400).send('There was an error ' + e)
        }

        res.send('You have followed ' + followed.populate('followers', '_id username'))

    });



router.route('/unfollow/:id').get(async(req, res) => {
    let unfollower = await User.findById(req.user.id);
    let unfollowed = await User.findById(req.params.id);

    if(!unfollowed.followers.find(user => user == unfollower.id)){
        res.send('You are not following this user');
        res.end()
    }

    try{
        await User.updateOne(unfollower, {$pull: {following: unfollowed.id}} );
        await User.update(unfollowed, {$pull: {followers: unfollower.id}} );
    } catch (e) {
        res.status(400).send('There was an error ' + e)
        res.end()
    }

    res.send('You have unfollowed ' + unfollowed.populate('followers', '_id username'))
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