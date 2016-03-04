angular.module('marvelApp').service('mainService', function($http) {

  this.getAllChars = function() {
    // if (num===1) {
    //   let query = '';
    // } else {
    //   let number = 64*num;
    //   let query = "?offset=" + number;
    // }
    return $http({
      method: 'GET',
      url: '/api/characters'
    }).then((chars) => {
      return chars.data.data.results;
    });
  };

  this.getOneChar = function(name) {
    let query = "";
    if(name) {
      query = "?name=" + name;
    };
    return $http({
      method: 'GET',
      url: '/api/characters' + query
    }).then((chars) => {
      return chars.data.data.results;
    });
  };

  this.getAllComics = function() {
    return $http({
      method: 'GET',
      url: '/api/comics'
    }).then((comics) => {
      return comics.data.data.results;
    });
  };

});
