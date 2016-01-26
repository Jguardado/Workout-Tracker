var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./db.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('combined'));
app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('middleware!');
  next();
});

//A lot more get and post functions to come.
