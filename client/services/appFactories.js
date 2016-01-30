angular.module('workoutTrack.services', [])

.factory('appFactory', ['$http', function($http) {

  return {
    // console.log('calling gettingInfo');
    gettingInfo: function() {
      return http.get('http://locaolhost:3000/today').then(function(res) {
        console.log('this is sresponse data', res.data);
        return res.data;
      });
    },
  };

}, ]);

// chartHistory = function(){
//   //some how creates a chart for the history
// }

console.log('inside of factories');
