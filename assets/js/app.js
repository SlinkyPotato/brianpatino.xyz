'use strict';

/* App Module */

var resumeApp = angular.module('resumeApp', [
    'ngRoute',
    'resumeAppControllers'
]);

resumeApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'app/components/home/home.html',
			controller: 'homeController'
		}).otherwise({
			redirectTo: '/home'
		})
	}
]);