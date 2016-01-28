var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./db.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

app.use(morgan('combined'));
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('middleware!');
  next();
});

app.get('/today', function(req, res, next) {
  console.log('sending get request');
  // db.
})
//
// app.post('/user', function(req, res, next) {
//   console.log('/CREATEUSER:POST REQ.BODY', req.body)
//   db.createUser(req.body).then(function(user, err) {
//     console.log('data and error in createUser', user, '----', err);
//     if (user === false) {
//       console.error('createUser ERROR:', err);
//       res.status(406).send(err);
//     } else {
//       console.log('createUser 200 OK:');
//       res.status(200).send(user);
//     }
//   });
// });
//
// app.post('/createPost', function(req, res, next) {
//   console.log('request body', req.body);
//   db.createPost(req.body).then(function(post, err) {
//     if (err) {
//       console.log('create post err:', err);
//       res.status(406);
//     } else {
//       console.log('createPost 200 ok:')
//       res.status(200).send(post);
//     }
//   });
// });
//A lot more get and post functions to come.
app.listen(port);
