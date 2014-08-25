(function () {
  var newsletterApp = angular.module('newsletterApp', []);

  newsletterApp.controller('NewsletterFormController', function ($scope, $rootScope, newsletterService) {
    $scope.subscribeUser = function () {
      var user = {
        email: $scope.email,
        firstName: $scope.firstName,
        lastName: $scope.lastName
      };

      newsletterService.addUser(user);

      $rootScope.$broadcast('userSubscribed');
    };
  });

  newsletterApp.controller('NewsletterTableController', function ($scope, $rootScope, newsletterService) {

    function refreshUsers() {
      $scope.users = newsletterService.getUsers();
    }

    $rootScope.$on('userSubscribed', refreshUsers);
  });

  newsletterApp.service('newsletterService', function () {
    var users = [
    ];

    this.getUsers = function () {
      return users;
    };

    this.addUser = function (user) {
      users.push(user);
    };
  });
})();