'use strict';

/* Controllers */

var myApp = angular.module('myApp');

myApp.controller('BarChartCtrl', ['$scope','$location',function($scope,$location) {
		$scope.myData = [10,20,30,80,60, 80, 20, 50];
		$scope.selectedReportName = $location.$$search.reportName;
		$scope.refreshChart = function(){
			$scope.myData = [];
			for(var i=0;i<=8;i++){
				$scope.myData.push(Math.round(Math.random()*100));
			}
		};
		
  }]);