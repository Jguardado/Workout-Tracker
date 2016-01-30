angular.module('workoutTrack.controller', [])

.controller('appController', ['$scope', 'appFactory', function($scope, appFactory) {

  $scope.user = {
    name: 'Juan',
    height: '',
    weight: '',
  };

  $scope.workout = {
    reps: '10',
    sets: '1',
    exercise: 'bench press',
  };

  $scope.logTraining = function() {
    //console.log(this.workout);
    $scope.user.workouts.push(this.workout);
    console.log($scope.user);
  };

  $scope.pullingInfo = function() {
    appFactory.gettingInfo()
      .then(function(data) {
        console.log(data);
      });
  };
}, ]);

console.log('inside appController');
