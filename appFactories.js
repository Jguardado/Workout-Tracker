var app = angular.module('myAppFactories', []);


app.factory('historFactory', [], function(){

  var trackHistory = function(){
    console.log(this);
  }
})
