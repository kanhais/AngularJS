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
        template: '<div id="digitalClock" style="font-weight:bold;"><span id="hours">{{hour}}</span> : <span id="minute">{{minute}}</span> : <span id="second">{{second}}</span></div>',
        link: function(scope, element, attrs) {
            scope.hour = '';
            scope.minute = '';
            scope.second = '';

           $interval(function() {
                
                var today = new Date();
                scope.hour = today.getHours();
                scope.minute = today.getMinutes();
                scope.second = today.getSeconds();
            }, 100);
        }
    };
    return directiveDefinitionObject;
});
