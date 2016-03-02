angular.module('workoutTrack.history', [])

.controller('historyController', ['$scope', function($scope) {
  $scope.history = [];

  // $scope.trackHistory = function(){
  //   console.log(this.workout);
  // }

}]);

console.log('inside of historyController');
