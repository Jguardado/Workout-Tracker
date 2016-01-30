angular.module('workoutTrack', ['ui.router', 'workoutTrack.history', 'workoutTrack.services', 'workoutTrack.controller'])

.config(function($stateProvider, $urlRouterProvider) {

  console.log('am I in here?');
  $stateProvider
    .state('today', {
      url: '/today',
      templateUrl: 'views/today.html',
      controller: 'appController',
    })
    .state('history', {
      url: '/history',
      templateUrl: 'views/history.html',
      controller: 'historyController',
    });
  $urlRouterProvider.otherwise('/today');

  console.log('bottom of the states');
});
