const express = require('express');
const db = require('./dbconnect');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log('Listening at ' + PORT)
});