angular.module('workoutTrack.services', [])

.factory('appFactory', ['$http', function($http) {
  //I'm pretty sure I need to change the end point for all of these http requests
  return {
    // console.log('calling gettingInfo');
    gettingInfo: function() {
      return $http.get('/today').then(function(res) {
        console.log('this is the response data', res.data);
        return res.data;
      });
    },

    saveUser: function(user) {
      return $http.post('http://localhost:3000/today', user).then(function(res) {
        return res;
      });
    },

    // getUser: function() {
    //   return $http.get('http://localhost:3000/today').then(function(res) {
    //     return res.data;
    //   });
    // },

    saveWorkout: function(workout) {
      return $http.post('http://localhost:3000/today', workout).then(function(res) {
        console.log('this is the saveWorkout res', res.data);
        return res;
      });
    },

    // getWorkout: function() {
    //   return $http.get('http://localhost:3000/data').then(function(res) {
    //     return res.data;
    //   });
    // },

  };

}, ]);


console.log('inside of factories');
