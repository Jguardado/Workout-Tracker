var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workouttrack');

var db = mongoose.connection;
var exports = module.exports;

var User;
var Workout;

db.on('error', console.error.bind(console, "connection error"));

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

var workout = new Workout ({ reps: 8, sets: 4, exercise: 'bench press' });

//need to save users and workouts to database. Will figure out later
exports.createWorkout = function(obj) {
  console.log(obj);

}
