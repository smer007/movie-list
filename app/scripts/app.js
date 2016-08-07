'use strict';

/**
 * @ngdoc overview
 * @name movieDetailsApp
 * @description
 * # movieDetailsApp
 *
 * Main module of the application.
 */
angular
  .module('movieDetailsApp', [
    'ngAria',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
