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

