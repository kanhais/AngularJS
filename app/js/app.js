'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/barChart', {templateUrl: 'partials/BarChart.html', controller: 'BarChartCtrl'});
  $routeProvider.when('/gbarChart', {templateUrl: 'partials/GBarChart.html', controller: 'GBarChartCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
