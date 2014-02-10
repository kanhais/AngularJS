'use strict';

/* Controllers */

var myApp = angular.module('myApp');

myApp.controller('CardLayoutCtrl', ['$scope',function($scope, selectedCardService) {
        
		$scope.cardData = [{title:'Bar Chart',url:'./img/bar_chart.jpg',cardUrl:'/barChart'},{title:'Geo Chart',url:'./img/geo_chart.JPG',cardUrl:'/geoChart'}];
        
		
  
  }]);