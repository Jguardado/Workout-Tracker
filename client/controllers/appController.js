angular.module('workoutTrack.controller', [])

.controller('appController', ['$scope', 'appFactory', function($scope, appFactory) {

  $scope.user = {
    name: '',
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
    appFactory.gettingInfo()
      .then(function(data) {
        console.log(data);
      });
  };
}, ]);

console.log('inside appController');
