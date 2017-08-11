'use strict';

/* App Module */
angular.module('resumeApp', [
    'ngRoute',
    'resumeApp.home'
])

.config(['$locationProvider', '$routeProvider', '$compileProvider',
function config($locationProvider, $routeProvider, $compileProvider) {
	$compileProvider.debugInfoEnabled(false); // set to false to disable debug for production
	$compileProvider.commentDirectivesEnabled(false); // set false to disable parsing code in comments
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/'});
}]);
