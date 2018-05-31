const express = require('express');
const db = require('./dbconnect');
const bodyParser = require('body-parser');
const app = express();
const posts = require('./routes/postsRoutes');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/posts', posts);

app.listen(PORT, () => {
    console.log('Listening at ' + PORT)
});