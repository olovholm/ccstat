<<<<<<< HEAD
// Which devices 
var vis = d3.select("#which_devices").append("svg")
.attr("class", "chart")
.attr("width", "200")
.attr("height", "200");
var arc = d3.svg.arc()
.innerRadius(50)
.outerRadius(100)
.startAngle(0)
.endAngle(1.5*Math.PI);

vis.append("path")
.attr("d", arc)
.attr("transform", "translate(100,100)");
=======
$(document).ready(function() {
	var dataset = [];
	
	for(var i = 0; i < 5; i++) {
		var newNumber = Math.round(Math.random() * 30);
		dataset.push(newNumber);
	}
	
	d3.select("#d3test").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("height", function(d) {
		var barHeight = d * 5;
		return barHeight+"px";
		});
		
		
	var svg = d3.select("#d3test")
	.append("svg")
	.attr("width",600)
	.attr("height",100)
	.attr("id","d3svg");
	
	var circles = svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle");
	
	circles.attr("cx", function(d,i) {
		return (i*50) + 25;
	})
	.attr("cy", 100/2)
	.attr("r", function(d) {
		return d;
	})
	.attr("fill","yellow")
	.attr("stroke","orange")
	.attr("stroke-width", function(d){
		return d/2;
	});
	
	
	
	
})
>>>>>>> f4e2f235779371292a602297f3e8d0b72a1d811f
