const express = require('express');
const db = require('./dbconnect');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.port || 3000;

const flash = require('connect-flash');
const session = require('express-session')
const passport = require('passport')
//Express session Middleware

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))


// Express Message Flash Middleware

app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});


// Passport Config

require('./config/passport')(passport);

//Passport Middleware

app.use(passport.initialize());
app.use(passport.session());


// Check if the user is logged in

app.get('*' , function(req, res, next){

    res.locals.user = req.user || null ;
    next();

});



const homeRoutes = require('./routes/homeRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static('public'));

app.use('/', homeRoutes);
app.use('/post' , postRoutes);

app.listen(PORT, () => {
    console.log('Listening at ' + PORT)
});