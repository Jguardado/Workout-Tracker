angular.module('workoutTrack.controller', [])

.controller('appController', ['$scope', function($scope) {


  $scope.user = {
    name: 'Juan',
    workouts: [],
  };

  $scope.workout = {
    exercise: 'bench press',
    sets: '1',
    reps: '10',
  };

  $scope.logTraining = function() {
    //console.log(this.workout);
    $scope.user.workouts.push(this.workout);
    console.log($scope.user);
  };

  // $scope.redirectToAbout = function(){
  //   $state.go('today');
  // }
}]);

console.log('inside appController');
