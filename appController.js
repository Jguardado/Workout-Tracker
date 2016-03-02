angular.module('control', ['ui.router', 'myApp'])

.controller('appController', ['$scope', function($scope){


  $scope.user = {
    name: 'Juan',
    workouts: []
  }

  $scope.workout = {
    exercise: 'bench press',
    sets: '1',
    reps: '10'
  }

  console.log($scope.user.name);

  $scope.logTraining = function(){
    //console.log(this.workout);
    $scope.user.workouts.push(this.workout);
    console.log($scope.user);
  }
  //$state.go('today');;
  // $scope.redirectToAbout = function(){
  //   $state.go('today');
  // }


}]);
