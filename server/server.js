var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./db.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

// app.use(morgan('combined'));
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('middleware!');
  next();
});

//right now it is only set up to retrieve information fro workouts. Need to build functions for user info.
app.get('/today', function(req, res, next) {
  console.log('sending get request');
  db.getWorkouts()
    // console.log('this is the res obj: ', res);


  next();
}, function(req, res, next) {

  console.log('making it into the next get request');
  db.getUsers()

  next();
})

.post('/today', function(req, res, next) {
  console.log('request body', req.body);
  db.createWorkout(req.body);
});

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

//A lot more get and post functions to come.
app.listen(port);
