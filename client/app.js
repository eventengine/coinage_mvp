angular.module('coinage_mvp', ['ngRoute']) // need ngRoute here?
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/*', {
      templateUrl: '/client/index.html',
      controller: 'mainController'
    })
    // .when('/signup', {
    //   templateUrl: '',
    //   controller: 'mainController'
    // })
    .otherwise({
      redirectTo: '/client/index.html'
    });
})
