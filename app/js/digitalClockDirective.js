/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('myApp');

myApp.directive('digitalClock', function($interval) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: true,
        template: '<div id="digitalClock"><span id="currentDate">{{currentDate}}</span><br><span id="currentTime">{{currentTime}}</span></div>',
		scope:{
			timeZone : '='
		},
        link: function(scope, element, attrs) {
		   scope.currentDate = '';
           scope.currentTime = '';
           $interval(function() {
                scope.currentDate = moment().tz(scope.timeZone).format('dddd, MMMM Do YYYY');
				scope.currentTime = moment().tz(scope.timeZone).format('h:mm:ss A');
            }, 100);
        }
    };
    return directiveDefinitionObject;
});
