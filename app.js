// script.js

// create the module and name it scotchApp
var wooderApp = angular.module('wooderApp', []);

// create the controller and inject Angular's $scope
wooderApp.controller('mainController', function($scope) {

  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});
