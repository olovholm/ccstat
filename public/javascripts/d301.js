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
