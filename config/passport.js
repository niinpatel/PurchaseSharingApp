const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = passport => {

    passport.use(new LocalStrategy(async(username, password, done) => {
            let user = await User.findOne({username: username});
            if(!user){
                return done(null, false, {message: 'Incorrect Username.'});
            }

            let credentialsCorrect = await bcrypt.compare(password, user.password);

            if(credentialsCorrect){
                return done(null, user);            }
            else {
                return done(null, false, {message: ' Incorrect Password.'});
            }

    }));

};


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
