angular.module('routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  console.log('am I in here?');
  $stateProvider
    .state('today', {
      url: '/',
      templateUrl: 'today.html',
      controller: 'appController'
    })
    .state('history', {
      url: '/history',
      templateUrl: 'history.html',
      controller: 'appController'
    })
  $urlRouterProvider.otherwise('/')
});
