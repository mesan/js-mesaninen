(function () {
  var wikipediaApp = angular.module('wikipediaApp', []);

  wikipediaApp.directive('wikipedia', function () {
    return {
      restrict: 'E',
      scope: {
        lang: '@',
        what: '@'
      },
      template: '<a ng-href="http://{{lang}}.wikipedia.org/wiki/{{what}}" target="_blank">' +
        '{{what}} on Wikipedia' +
        '</a>'
    };
  });
})();