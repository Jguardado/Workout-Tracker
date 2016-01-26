var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myapp');

var db = mongoose.connection;
var User;
var Workout;
var exports = module.exports;

db.on('error', console.error.bind(console, "connection error"));

db.once('open', function() {
  console.log('we are connected');
});

var WorkoutSchema = mongoose.Schema({
  reps: String,
  sets: String,
  exercise: String,
});

var UserSchema = mongoose.Schema({
  username: String,
  weight: Number,
  height: Number,
});

User = mongoose.model('User', UserSchema);
Workout = mongoose.model('Workout', WorkoutSchema);

//need to save users and workouts to database. Will figure out later
exports.createWorkout = function(obj) {
  console.log(obj);
  
}
