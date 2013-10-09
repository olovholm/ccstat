$(function () {
	  var chart1;
    var chart2;
    
    
    $(document).ready(function() {
      scrollspyer();
      

      /* Ready the flexslider */
	$('.flexslider').flexslider({
	  animation: "slide",
	  controlsContainer: ".flex-container"
	  });

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
					width: 700,
					height: 400,
					renderer: 'line',
					series: [{
						data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
						color: '#4682b4'
					}, {
						data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
						color: '#9cc1e0'
					}]
				});
				
				var format = function(n) {

					var map = {
						0: 'zero',
						1: 'first',
						2: 'second',
						3: 'third',
						4: 'fourth'
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
					width: 700,
					height: 200,
					renderer: 'line',
					series: [{
						data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
						color: '#4682b4'
					}, {
						data: [ { x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 } ],
						color: '#9cc1e0'
					}]
				});
				graph2.render();	

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

