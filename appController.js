angular.module('myApp', [])

.controller('appController', ['$scope', function($scope){

  console.log('here');

  $scope.user = {
    name: 'Juan',
    workouts: []
  }

  $scope.workout = {
    exercise: 'bench press',
    sets: '1',
    reps: '10'
  }


  $scope.logTraining = function(){
    //console.log(this.workout);
    $scope.user.workouts.push(this.workout);
    console.log($scope.user);
  }
  $state.go('today');;
  // $scope.redirectToAbout = function(){
  //   $state.go('today');
  // }


}]);