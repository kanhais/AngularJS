'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('gbarsChart', function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         
         link: function (scope, element, attrs) {
		 
			var margin = {top: 20, right: 20, bottom: 30, left: 40},
				width = 960 - margin.left - margin.right,
				height = 500 - margin.top - margin.bottom;

			var x0 = d3.scale.ordinal()
				.rangeRoundBands([0, width], .1);

			var x1 = d3.scale.ordinal();

			var y = d3.scale.linear()
				.range([height, 0]);

			var color = d3.scale.ordinal()
				.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

			var xAxis = d3.svg.axis()
				.scale(x0)
				.orient("bottom");

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.tickFormat(d3.format(".2s"));

			var chartDiv = d3.select(element[0]);
			
			var svg = chartDiv.append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			  .append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			d3.csv("data.csv", function(error, data) {
			  var ageNames = d3.keys(data[0]).filter(function(key) { return key !== "State"; });

			  data.forEach(function(d) {
				d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
			  });

			  x0.domain(data.map(function(d) { return d.State; }));
			  x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
			  y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

			  svg.append("g")
				  .attr("class", "x axis")
				  .attr("transform", "translate(0," + height + ")")
				  .call(xAxis);

			  svg.append("g")
				  .attr("class", "y axis")
				  .call(yAxis)
				.append("text")
				  .attr("transform", "rotate(-90)")
				  .attr("y", 6)
				  .attr("dy", ".71em")
				  .style("text-anchor", "end")
				  .text("Population");

			  var state = svg.selectAll(".state")
				  .data(data)
				.enter().append("g")
				  .attr("class", "g")
				  .attr("transform", function(d) { return "translate(" + x0(d.State) + ",0)"; });

			  state.selectAll("rect")
				  .data(function(d) { return d.ages; })
				.enter().append("rect")
				  .attr("width", x1.rangeBand())
				  .attr("x", function(d) { return x1(d.name); })
				  .attr("y", function(d) { return y(d.value); })
				  .attr("height", function(d) { return height - y(d.value); })
				  .style("fill", function(d) { return color(d.name); });

			  var legend = svg.selectAll(".legend")
				  .data(ageNames.slice().reverse())
				.enter().append("g")
				  .attr("class", "legend")
				  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

			  legend.append("rect")
				  .attr("x", width - 18)
				  .attr("width", 18)
				  .attr("height", 18)
				  .style("fill", color);

			  legend.append("text")
				  .attr("x", width - 24)
				  .attr("y", 9)
				  .attr("dy", ".35em")
				  .style("text-anchor", "end")
				  .text(function(d) { return d; });

			});
         } 
      };
      return directiveDefinitionObject;
   })
  .directive('barsChart', function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         //our data source would be an array
         //passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           //in D3, any selection[0] contains the group
           //selection[0][0] is the DOM node           
		   //but we won't need that this time
		   
			var chart = d3.select(element[0]);
		   
		   scope.$watch('data',function(newValue){
			// clear the elements inside of the directive				
			chart.selectAll('*').remove();
			   //to our original directive markup bars-chart
			   //we add a div with out chart stling and bind each
			   //data entry to the chart
				chart.append("div").attr("class", "chart")
				 .selectAll('div')
				 .data(scope.data).enter().append("div")
				 .transition().ease("elastic")
				 .style("width", function(d) { return d + "%"; })
				 .text(function(d) { return d + "%"; });
			   //a little of magic: setting it's width based
			   //on the data value (d) 
			   //and text all with a smooth transition
		   });
         } 
      };
      return directiveDefinitionObject;
   });
