angular.module('marvelApp').controller('charactersCtrl', function($scope, mainService, characters) {

  $scope.character = characters
  $scope.currentPage = 1;
  $scope.pageSize = 16;

  // const getAllChars = function() {
  //   return mainService.getAllChars($scope.currentPage).then((chars) => {
  //     $scope.character = chars;
  //   })
  // };

  $scope.getOneChar = function() {
    return mainService.getOneChar($scope.name).then((char) => {
      $scope.character = char;
    })
  };

});
