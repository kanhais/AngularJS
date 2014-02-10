'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {
		
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('GBarChartCtrl', [function() {
	
  }])
  .controller('BarChartCtrl', ['$scope',function($scope) {
		$scope.myData = [10,20,30,80,60, 80, 20, 50];
		
		$scope.refreshChart = function(){
			$scope.myData = [];
			for(var i=0;i<=8;i++){
				$scope.myData.push(Math.round(Math.random()*100));
			}
		};
  }]);;