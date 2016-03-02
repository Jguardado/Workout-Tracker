var mongoose = require('mongoose');
var exports = module.exports;

mongoose.connect('mongodb://localhost/workouttrack');

var db = mongoose.connection;
var exports = module.exports;

var User;
var Workout;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('we are connected');
});

var WorkoutSchema = mongoose.Schema({
  reps: Number,
  sets: Number,
  exercise: String,
});

var UserSchema = mongoose.Schema({
  username: String,
  weight: Number,
  height: Number,
});

User = mongoose.model('User', UserSchema);
Workout = mongoose.model('Workout', WorkoutSchema);

//-------------------practice saving to database--------------
// var workout = new Workout({ reps: 8, sets: 4, exercise: 'bench press' });
// var user = new User({ username: 'Juan', weight: 215, height: 6 });

// workout.save(function(err, workout) {
//   if (err) console.error('problems saving workout');
//   return workout;
// }).then(function(workout) {
//   workout.find().then(function(workout) {
//     console.log('this is the workout', workout);
//   });
// });

//
// user.save(function(err, user) {
//   if (err) console.error('problems saving single user');
//   return user;
// }).then(function(user) {
//   user.find().then(function(user) {
//     console.log('this is the user', user);
//   });
// });
//---------------------------------------------------------------

//need to save users and workouts to database. Will figure out later
exports.createWorkout = function(obj) {
  var newWorkout = new Workout({
    reps: obj.reps,
    sets: obj.sets,
    exercise: obj.exercise,
  });

  newWorkout.save(function(err, newWorkout) {
    if (err) return console.error('new workout is not saved');
    return newWorkout;
  });

  return newWorkout;
};

exports.getWorkouts = function() {
  return Workout.find({});
};

exports.createUser = function(obj) {
  var newUser = new User({
    username: obj.username,
    weight: obj.weight,
    height: obj.height,
  });

  newUser.save(function(err, newUser) {
    if (err) return console.error('trouble saving user');
    return newUser;
  });

  return newUser;

};

exports.getUsers = function() {
  return User.find({}, function(err, data) {
    if (err) {
      console.error('trouble getting users');
    } else {
      return data;
    }
  });
};
