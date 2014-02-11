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
		
		$scope.selectedRows = [];
		
		$scope.$watch('selectedRows',function(newValue,oldValue){
			if(newValue !== oldValue){
				$scope.myData = [];
				angular.forEach(newValue[0], function(value, key){
					if(key !== 'Name'){
						$scope.myData.push(value);
					}
				});
			}
		},true);
		
		$scope.ngGridData = [{Name: "Devendra", Math: 10,Science:30,Chemistry:15,English:40,Sanskrit:55,Vyayam:80,Computer:62,Physics:75},
                 {Name: "Kanhai", Math: 20,Science:40,Chemistry:65,English:20,Sanskrit:44,Vyayam:20,Computer:45,Physics:75},
                 {Name: "Sandip", Math: 30,Science:50,Chemistry:45,English:40,Sanskrit:66,Vyayam:50,Computer:26,Physics:58},
                 {Name: "Jay", Math: 40,Science:60,Chemistry:25,English:60,Sanskrit:88,Vyayam:30,Computer:38,Physics:47},
                 {Name: "Shail", Math: 50,Science:70,Chemistry:15,English:80,Sanskrit:33,Vyayam:40,Computer:49,Physics:67}];
		$scope.gridOptions = { 
					data: 'ngGridData',
					multiSelect:false,				
					selectedItems:$scope.selectedRows
				};
		
  }]);