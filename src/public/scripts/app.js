angular.module('marvelApp', ['ui.router', 'angularUtils.directives.dirPagination']).config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/characters');

  $stateProvider
  // .state('/home', {
  //   url: '/home',
  //   templateUrl: '../views/home/homeTmpl.html',
  //   controller: 'homeCtrl',
  //   resolve: {
  //     characters: function(mainService) {
  //       return mainService.getAllChars();
  //     }
  //   }
  // })
  .state('/characters', {
    url: '/characters',
    templateUrl: '../views/characters/charactersTmpl.html',
    controller: 'charactersCtrl',
    resolve: {
      characters: function(mainService) {
        return mainService.getAllChars();
      }
    }
  })
  .state('/comics', {
    url: '/comics',
    templateUrl: '../views/comics/comicsTmpl.html',
    controller: 'comicsCtrl',
    resolve: {
      comics: function(mainService) {
        return mainService.getAllComics();
      }
    }
  })

});
