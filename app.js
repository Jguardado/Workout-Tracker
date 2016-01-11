var app = angular.module('myApp', []);

app.controller('myAppController', ['$scope', function($scope){

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



}]);
