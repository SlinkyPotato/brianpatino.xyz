'use strict';

angular.module('resumeApp.home', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/home/home.component.html',
		controller: 'HomeController'
	});
}])

.controller('HomeController', ['$scope',function($scope) {}]);
