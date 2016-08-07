'use strict';

/**
 * @ngdoc function
 * @name movieDetailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieDetailsApp
 */
angular.module('movieDetailsApp')
  .controller('MainCtrl', MainController);

MainController.$inject= ['movieDtlsService'];

function MainController(movieDtlsService) {
    var mainVm = this;
		mainVm.parts=[];
		mainVm.log=[];
      movieDtlsService.getCollection().then(function (result) {
	  // console.log('result', result);
	  mainVm.parts = result.parts;
	  // console.log('parts', mainVm.parts);
	  angular.forEach(mainVm.parts, function(value, key) {
		  this.push(value.id);
		}, mainVm.log);
	  // console.log('log', mainVm.log);
	  
	  
	}, function (error) {
	  console.log('err', error.status);
	});

  }