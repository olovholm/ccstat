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
		
});


$(document).ready(function(){
	var margin = 50,
	width = 700,
	height = 300;


	console.log("Ready for timeseries");
	data = d3.json("data/timeseries.json",draw);

	function draw(data) {
		var x_extent = d3.extent(data, function(d){ return d[1] });

		var x_scale = d3.scale.linear()
		.range([margin,width-margin])
		.domain(x_extent);

		var y_extent = d3.extent(data, function(d){ return d[2] });

		var y_scale = d3.scale.linear()
		.range([margin,height-margin])
		.domain(y_extent);

		d3.select("#timeseries")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.selectAll("circle")
		.data(data[0])
		.enter()
		.append("circle")
		.attr("cx", function(d){return x_scale(d[1])})
		.attr("cy", function(d){return y_scale(d[2])})
		.text(function (d) {
			return d[1]+d[2] ;
		});
	}


});


$(document).ready(function(){
	
		/* Chart one - the platform distribution */
		
		var w = 500;
		var h = 100;
		var barPadding = 1; 
		var dataset;
		
		
	
		
		d3.json("data/barchart.json", function(data) {
			console.log(data)
			dataset = data;
			drawbarchart();
		});

			function drawbarchart() {
			var svg = d3.select("#cont1")
			.append("svg")
			.attr("height",h)
			.attr("width",w);
			

	      	svg.selectAll("rect")
				.data(dataset)
				.enter()
				.append("rect")
				.attr("x",function(d,i) {
					return i * (w / dataset.length);
				})
				.attr("y", function(d){
				 return h - d*4;
				})
				.attr("width", w/ dataset[0].length - barPadding)
				.attr("height",function(d){
					return d[1] *4;
				})
				.attr("fill", function(d) {
					return "rgb(0,0,"+ (Math.round(d[1]) * 10) + ")";
				})
			};		


});