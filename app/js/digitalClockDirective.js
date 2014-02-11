/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('myApp');

myApp.directive('digitalClock', function($interval) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: false,
        template: '<div id="digitalClock"><span id="currentTime">{{currentTime}}</span></div>',
		scope:{
			timeFormat : '@',
			timeZone : '@'
		},
        link: function(scope, element, attrs) {
           scope.currentTime = '';
           $interval(function() {
                var tdate = moment().tz(scope.timeZone).format(scope.timeFormat);
                scope.currentTime = tdate;
            }, 100);
        }
    };
    return directiveDefinitionObject;
});
