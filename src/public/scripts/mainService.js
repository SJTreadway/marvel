angular.module('marvelApp').service('mainService', function($http) {

  this.getAllChars = function() {
    return $http({
      method: 'GET',
      url: '/api/characters'
    }).then((chars) => {
      console.log('Results', chars.data.data.results);
      return chars.data.data.results;
    });
  };

  this.getAllComics = function() {
    return $http({
      method: 'GET',
      url: '/api/comics'
    }).then((comics) => {
      console.log('Results', comics.data.data.results);
      return comics.data.data.results;
    });
  };

});
