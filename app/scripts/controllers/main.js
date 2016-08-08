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
		mainVm.movieDtlsList=[];
		mainVm.movieCreditsList=[];
		mainVm.movieDt ={};


  		movieDtlsService.getCollection().then(function (result) {
	  		// console.log('result', result);
	  	mainVm.parts = result.parts;
	  		// console.log('parts', mainVm.parts);

	  	mainVm.parts.director;
	  	angular.forEach(mainVm.parts, function(value, key) {
		  this.push(value.id);
		  	// console.log('key', key);
		  	// console.log('value', this[key]);

		  	(function(value) {
		  		movieDtlsService.getMovieById(value)
		  		.then(function (result) {
		  		
			  		mainVm.movieDtlsList.push(result);
					// console.log('mainVm.movieDtlsList', mainVm.movieDtlsList);
			  
				}, function (error) {
				  	console.log('err', error.status);
				});

				movieDtlsService.getCreditsById(value)
				.then(function (result) {
					mainVm.parts[key].director = result.crew[0].name;
				  	mainVm.movieCreditsList.push(result);
					// console.log('mainVm.movieCreditsList', mainVm.movieCreditsList);
				}, function (error) {
				  console.log('err', error.status);
				}).
				then(function (argument) {
					mainVm.getmovieDtls(0);
				})
		  	})(this[key]);
		  	

		}, mainVm.log);
	  		// console.log('log', mainVm.log);
	  		
	  
		}, function (error) {
		  console.log('err', error.status);
		});


      	
      	
      	mainVm.getmovieDtls = function (id) {
      	// console.log('index', id);
      	// console.log('mainVm.movieDtlsList', mainVm.movieDtlsList[id]);
      	// console.log('mainVm.movieCreditsList', mainVm.movieCreditsList[id]);
      	// console.log('id', mainVm.parts[id].id);
      	mainVm.movieDt.title = mainVm.movieDtlsList[id].title;
      	mainVm.movieDt.posterPath = mainVm.movieDtlsList[id].poster_path;
      	mainVm.movieDt.director = mainVm.movieCreditsList[id].crew[0].name;
		mainVm.movieDt.stars = mainVm.movieCreditsList[id].cast[0].name+', '+
								mainVm.movieCreditsList[id].cast[1].name+', '+
								mainVm.movieCreditsList[id].cast[2].name+', '+
								mainVm.movieCreditsList[id].cast[3].name;
		mainVm.movieDt.writers ='';
		angular.forEach(mainVm.movieCreditsList[id].crew, function(value, key) {	
		  if (value.department == "Writing") {
		  	mainVm.movieDt.writers += value.name+', ';	
		  }
		});
		mainVm.movieDt.writers = mainVm.movieDt.writers.slice(0, -2);

		mainVm.movieDt.overview = mainVm.movieDtlsList[id].overview;

		mainVm.movieDt.profile=[];
		angular.forEach(mainVm.movieCreditsList[id].cast, function(value, key) {
			if (key <5) {
				mainVm.movieDt.profile.push({
	  			"character":mainVm.movieCreditsList[id].cast[key].character,
	  			"name":mainVm.movieCreditsList[id].cast[key].name,
	  			"profile_path":mainVm.movieCreditsList[id].cast[key].profile_path
	  			});		
			}	
	  		
		  
		});
		// console.log('mainVm.movieDt.profile_path', mainVm.movieDt.profile);
		mainVm.movieDt.largeIcon = mainVm.movieDt.profile[0].profile_path;
      }


      mainVm.getLargeIcon = function (index) {
      	mainVm.movieDt.largeIcon = mainVm.movieDt.profile[index].profile_path;
      }

// var init = function () {
//   //initital load
// };
// // and fire it after definition
// init();
  };


  