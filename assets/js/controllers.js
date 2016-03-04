'use strict';

/* Controllers */
var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('HomeController', function($scope) {
	$scope.skills = [
		{
			'tool': 'HTML',
			'interest': '10'
		},
		{
			'tool': 'SQL',
			'interest': '10'
		}
	]
})