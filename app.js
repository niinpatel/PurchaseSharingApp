const express = require('express');
const db = require('./dbconnect');
const bodyParser = require('body-parser');
const app = express();
const posts = require('./routes/postsRoutes');
const home = require('./routes/homeRoutes');
const users = require('./routes/usersRoutes');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', home);
app.use('/posts', posts);
app.use('/users', users);


app.listen(PORT, () => {
    console.log('Listening at ' + PORT)
});