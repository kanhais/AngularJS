'use strict';

var myApp = angular.module('myApp', ['ngRoute','ngGrid']);
// Declare app level module which depends on filters, and services
myApp.
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'CardLayoutCtrl', reloadOnSearch: false});
	  $routeProvider.when('/barChart', {templateUrl: 'partials/BarChart.html', controller: 'BarChartCtrl'});
	  $routeProvider.otherwise({redirectTo: '/view1'});
	}]);
