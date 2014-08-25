var testApp = angular.module('testApp', []);

testApp.controller('CountController', function ($scope) {
  $scope.count = 0;
  $scope.increment = function () {
    $scope.count++;
  };
});