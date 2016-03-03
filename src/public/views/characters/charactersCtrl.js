angular.module('marvelApp').controller('charactersCtrl', function($scope, mainService, characters) {

  $scope.chars = characters;
  $scope.currentPage = 1;
  $scope.pageSize = 20;

});
