angular.module('marvelApp').controller('comicsCtrl', function($scope, mainService, comics) {

  $scope.comics = comics;
  $scope.pageSize = 10;
  $scope.currentPage = 1;

});
