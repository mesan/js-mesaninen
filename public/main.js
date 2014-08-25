(function () {
  var gameSearchApp = angular.module('gameSearchApp', []);

  gameSearchApp.controller('GameSearchController', function ($scope, gameService) {
    $scope.games = gameService.getGames();
  });

  gameSearchApp.service('gameService', function () {
    this.getGames = function () {
      return [
        {
          title: 'FIFA 15',
          released: 2015
        },
        {
          title: 'Final Fantasy IX',
          released: 2000
        },
        {
          title: 'Grand Theft Auto V',
          released: 2013
        },
        {
          title: 'Pacman',
          released: 1980
        },
        {
          title: 'The Elder Scrolls V: Skyrim',
          released: 2011
        },
        {
          title: 'The Last of Us',
          released: 2014
        },
        {
          title: 'Tetris',
          released: 1984
        }
      ];
    };
  });
})();