angular.module('coinage_mvp', ['ngRoute']) // need ngRoute here?
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/otherstuff', {
      templateUrl: 'other.html',
      controller: 'mainController'
    })
    // .when('/signup', {
    //   templateUrl: '',
    //   controller: 'mainController'
    // })
    .otherwise({
      redirectTo: '/'
    });
})
