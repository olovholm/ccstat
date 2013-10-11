$(function () {
<<<<<<< HEAD
	  var chart1;
    var chart2;
    
    
    $(document).ready(function() {
      scrollspyer();
=======
	var chart1;
    var chart2;
	/* MAIN JS FILE DOCUMENT READY FUNCTION*/
    $(document).ready(function() {
      scrollspyer();
	chart1;
>>>>>>> f4e2f235779371292a602297f3e8d0b72a1d811f
      

      /* Ready the flexslider */
	$('.flexslider').flexslider({
	  animation: "slide",
	  controlsContainer: ".flex-container"
	  });
<<<<<<< HEAD

  });
});
	
ay.pie_chart('which_genres', [{index:1,
	name: "test1", 
	value: 12},
	{index:2,
		name: "test2", 
		value: 6}], {percentage: true});
		
ay.pie_chart('which_devices', 
			[{index:1,
				name: "test1", 
				value: 12},
			{index:2,
				name: "test2", 
				value: 6},
			{index:3,
				name: "test3", 
				value: 9}], {percentage: true});


				var graph1 = new Rickshaw.Graph({
					element: document.querySelector("#when_stream"),
					width: 750,
					height: 400,
					renderer: 'line',
					series: [{
						data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 },
						{ x: 5, y: 40 }, { x: 6, y: 24 }, { x: 7, y: 19 }, { x: 8, y: 35 }, { x: 9, y: 16 },
						{ x: 10, y: 40 }, { x: 11, y: 24 }, { x: 12, y: 19 }, { x: 13, y: 35 }, { x: 14, y: 16 },
						{ x: 15, y: 40 }, { x: 16, y: 24 }, { x: 17, y: 19 }, { x: 18, y: 35 }, { x: 19, y: 16 },
						{ x: 20, y: 40 }, { x: 21, y: 24 }, { x: 22, y: 19 }, { x: 23, y: 35 }, { x: 24, y: 50 }],
						color: '#4682b4'
					}]
				});
				
				var format = function(n) {
					var map = {
						0: '06',
						1: '07',
						2: '08',
						3: '09',
						4: '10',
						5: '11',
						6: '12',
						7: '13',
						8: '14',
						9: '15',
						10: '16',
						11: '17',
						12: '18',
						13: '19',
						14: '20',
						15: '21',
						16: '22',
						17: '23',
						18: '00',
						19: '01',
						20: '02',
						21: '03',
						22: '04',
						23: '05'
					};
					return map[n];
				}

				var x_ticks = new Rickshaw.Graph.Axis.X( {
					graph: graph1,
					orientation: 'bottom',
					element: document.getElementById('x_axis'),
					tickFormat: format
				} );
				
				graph1.render();
				
				var graph2 = new Rickshaw.Graph({
					element: document.querySelector("#when_search"),
					width: 750,
					height: 400,
					renderer: 'line',
					series: [{
						data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 },
						{ x: 5, y: 40 }, { x: 6, y: 24 }, { x: 7, y: 19 }, { x: 8, y: 35 }, { x: 9, y: 16 },
						{ x: 10, y: 40 }, { x: 11, y: 24 }, { x: 12, y: 19 }, { x: 13, y: 35 }, { x: 14, y: 16 },
						{ x: 15, y: 40 }, { x: 16, y: 24 }, { x: 17, y: 19 }, { x: 18, y: 35 }, { x: 19, y: 16 },
						{ x: 20, y: 40 }, { x: 21, y: 24 }, { x: 22, y: 19 }, { x: 23, y: 35 }, { x: 24, y: 50 }],
						color: '#4682b4'
					}]
				});
				
				var format = function(n) {
					var map = {
						0: '06',
						1: '07',
						2: '08',
						3: '09',
						4: '10',
						5: '11',
						6: '12',
						7: '13',
						8: '14',
						9: '15',
						10: '16',
						11: '17',
						12: '18',
						13: '19',
						14: '20',
						15: '21',
						16: '22',
						17: '23',
						18: '00',
						19: '01',
						20: '02',
						21: '03',
						22: '04',
						23: '05'
					};
					return map[n];
				}

				var x_ticks = new Rickshaw.Graph.Axis.X( {
					graph: graph2,
					orientation: 'bottom',
					element: document.getElementById('x_axis'),
					tickFormat: format
				} );
				
				graph2.render();
=======
	
		/* Chart one - the platform distribution */
		
		var w = 500;
		var h = 100;
		var barPadding = 1; 
		var dataset;
		
		
	
		
		d3.json("data/barchart.json", function(data) {
			dataset = data;
			console.log(data);
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
				 return h - d[1] *4;
			})
			.attr("width", w/ dataset.length - barPadding)
			.attr("height",function(d){
				return d[1] *4;
			})
			.attr("fill", function(d) {
				console.log(d)
				return "rgb(0,0,"+ (Math.round(d[1]) * 10) + ")";
			})
		};		
		
		
	
	
	
	 chart2 = new Highcharts.Chart({
            chart: {
                renderTo: 'cont2',
                type: 'column',
                margin: [ 50, 50, 100, 80]
            },
            title: {
                text: 'World\'s largest cities per 2008'
            },
            xAxis: {
                categories: [
                    'Tokyo',
                    'Jakarta',
                    'New York',
                    'Seoul',
                    'Manila',
                    'Mumbai',
                    'Sao Paulo',
                    'Mexico City',
                    'Dehli',
                    'Osaka',
                    'Cairo',
                    'Kolkata',
                    'Los Angeles',
                    'Shanghai',
                    'Moscow',
                    'Beijing',
                    'Buenos Aires',
                    'Guangzhou',
                    'Shenzhen',
                    'Istanbul'
                ],
                labels: {
                    rotation: -45,
                    align: 'right',
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        'Population in 2008: '+ Highcharts.numberFormat(this.y, 1) +
                        ' millions';
                }
            },
            series: [{
                name: 'Population',
                data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18,
                    17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8,
                    11.7, 11.2],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });
    
});


>>>>>>> f4e2f235779371292a602297f3e8d0b72a1d811f

$(window).scroll(function(){ 
		var offset = 0;
		var sticky = false;
		var top = $(window).scrollTop();
		
		if ($("#main-wrapper").offset().top < top) {
			$("#nav-vertical").addClass("sticky");
			sticky = true;
		} else {
			$("#nav-vertical").removeClass("sticky");
		}
	});
	
var $root = $('html, body');
  $('a').click(function() {
      var href = $.attr(this, 'href');
      href = href.substr(1);
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

	
var scrollspyer = function scrollspyer() {
  $('.div-content').each(function(i) {
          				var position = $(this).position();
          				console.log(position);
          				console.log('min: ' + position.top + ' / max: ' + parseInt(position.top + $(this).height()));
          				$(this).scrollspy({
          					min: position.top,
          					max: position.top + $(this).height(),
          					onEnter: function(element, position) {
          						if(console) console.log('entering ' +  element.id);
          						$("#"+element.id.replace('c','m')).addClass("scrollfixed");
          					},
          					onLeave: function(element, position) {
          						if(console) console.log('leaving ' +  element.id);
          						console.log(element.id.replace('c','m'));
          						$("#"+element.id.replace('c','m')).removeClass("scrollfixed");
          					}
          				});
          			});     
};

