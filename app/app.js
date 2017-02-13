'use strict';

/* App Module */
angular.module('resumeApp', [
    'ngRoute',
    'resumeApp.home'
])

.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
  }]
);