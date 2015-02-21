'use strict';

angular.module('nodeTestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/route', {
        templateUrl: 'app/route/route.html',
        controller: 'RouteCtrl'
      });
  });
