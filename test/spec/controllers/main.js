'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('movieDetailsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      
    });
  }));

  it('movie details should be defined', function () {
    expect("MainCtrl.movieDt").toBeDefined();
  });
});
