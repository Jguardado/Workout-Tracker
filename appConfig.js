angular.module('workoutTrack', ['ui.router', 'workoutTrack.history', 'workoutTrack.factories', 'workoutTrack.controller'])

.config(function($stateProvider, $urlRouterProvider) {

  console.log('am I in here?');
  $stateProvider
    .state('today', {
      url: '/',
      templateUrl: 'today.html',
      controller: 'appController',
    })
    .state('history', {
      url: '/history',
      templateUrl: 'history.html',
      controller: 'workoutTrack.history',
    });
  $urlRouterProvider.otherwise('/');
});
