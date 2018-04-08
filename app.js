const express = require('express');

const auth = require('./auth/auth');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(auth);

app.listen(3000, () => console.log('Listening on port 3000'));