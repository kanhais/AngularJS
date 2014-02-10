'use strict';

var myApp = angular.module('myApp', ['ngRoute']);
// Declare app level module which depends on filters, and services
myApp.
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/barChart', {templateUrl: 'partials/BarChart.html', controller: 'BarChartCtrl'});
	  $routeProvider.otherwise({redirectTo: '/view1'});
	}]);
