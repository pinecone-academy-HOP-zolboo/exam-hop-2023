const express = require ('express');
const app = express();
const cors = require('cors');
const mongodb = require('./mongodb')
const route = require('./route')
const bodyParser = require('body-parser');

const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', route);


mongodb();

app.listen(port, () => {
    console.log(`express app listening on http://localhost:${port}`)
})