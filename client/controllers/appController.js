angular.module('workoutTrack.controller', [])

.controller('appController', ['$scope', 'appFactory', function($scope, appFactory) {

  $scope.user = {
    name: 'Juan Guardado',
    height: '',
    weight: '',
  };

  $scope.workout = {
    reps: '',
    sets: '',
    exercise: '',
  };

  $scope.logTraining = function() {
    //console.log(this.workout);
    // var temp = scope.workout;
    appFactory.saveWorkout($scope.workout);

    // console.log('this is the passed in workout', workout);
    console.log('this is the scope.workout', $scope.workout);
  };

  $scope.pullingInfo = function() {
    appFactory.gettingInfo();
    console.log('this is result of the function', appFactory.gettingInfo());

    // .then(function(data) {
    //   console.log(data);
    // });
  };

  $scope.pullingInfo();
},]);

console.log('inside appController');
