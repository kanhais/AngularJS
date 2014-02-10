'use strict';

/* Controllers */

var myApp = angular.module('myApp');

	myApp.directive('cardLayout', function ($location, selectedCardService) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var cardDirectiveObject = {
         restrict: 'A',
         replace: false,
         scope: {data:'='},
		 templateUrl: './shared/cardLayout.html',
         link: function (scope, element, attrs) {
		 scope.goToSpecificReport = function(selectedCard){
		 $location.path(selectedCard.cardUrl);
		 $location.search('reportName',selectedCard.title);
		 }
			
    		
    	
         }
      };
      return cardDirectiveObject;
   });