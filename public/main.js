(function () {
  var superheroesApp = angular.module('superheroesApp', []);

  superheroesApp.controller('SuperheroesController', function ($scope, superheroesService) {
    $scope.chosenSuperhero = null;

    $scope.chooseRandomSuperhero = function () {
      $scope.chosenSuperhero = superheroesService.getRandomSuperhero();
    };
  });

  superheroesApp.service('superheroesService', function () {
    var superheroes = [
      "Batman",
      "Superman",
      "Flash",
      "Green Lantern",
      "Green Arrow",
      "Wonder Woman",
      "Martian Manhunter",
      "Robin/Nightwing",
      "Blue Beetle",
      "Black Canary",
      "Spider Man",
      "Captain America",
      "Iron Man",
      "Thor",
      "Hulk",
      "Wolverine",
      "Daredevil",
      "Hawkeye",
      "Cyclops",
      "Silver Surfer"
    ];

    function getRandomIndex() {
      return Math.floor(Math.random() * superheroes.length);
    }

    this.getRandomSuperhero = function () {
      return superheroes[getRandomIndex()];
    };
  });
})();