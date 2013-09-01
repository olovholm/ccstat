$(function () {
	var chart1;
    var chart2;
	/* MAIN JS FILE DOCUMENT READY FUNCTION*/
    $(document).ready(function() {
      scrollspyer();
	chart1;
      

      /* Ready the flexslider */
	$('.flexslider').flexslider({
	  animation: "slide",
	  controlsContainer: ".flex-container"
	  });

	
	
	
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

