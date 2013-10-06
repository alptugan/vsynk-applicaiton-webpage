var w,h;
$(window).ready(function() {
	
	$('.images a img').addClass('color');
	
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		padding:[0,0,0,0]
	});

	
	
	$('.logo').append('<span class="hover"></span>').each(function () {
	  	var $span = $('> span.hover', this).css('opacity', 0);

	  	$(this).hover(function () {
	    	$span.stop().fadeTo(200, 1);
	 	}, function () {
	   		$span.stop().fadeTo(200, 0);
	  	});
	});

	$('.buy').hover(function(e){
		e.preventDefault();
		$(this).stop().animate({
			'opacity': 1
			},
			200, function() {
			
		});
	});
});

$(window).resize(function() {
	w = $(window).width();
	h = $(window).height();
	
	if($('.vid') && w < 940) {
		$('.vid').css({'width':w,'height':(705/940*w)});
	}
	
}).resize();

