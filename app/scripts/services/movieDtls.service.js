(function() {
	'use strict';

	angular.module('movieDetailsApp').service('movieDtlsService', movieDtlsService);

	movieDtlsService.$inject = ['$http', '$q'];

	function movieDtlsService($http, $q) {
		var self = this;
		var apiKey="33f68540cbc091c6aea77f0efbc03057";

		self.getCollection = function () {
			// defer object is created when you want to tell the caller of the function that whenever the response comes from 
			// this call, I promise I will return back to you.
			var defer = $q.defer();

			$http
				.get('https://api.themoviedb.org/3/collection/528?api_key='+apiKey)
				.then(function (response) {
					defer.resolve(response.data);//proimse made is successfull
				}, function (error) {
					defer.reject(error.status);//proimse made is unsuccessfull
				});

				return defer.promise;
		};
	}
})();