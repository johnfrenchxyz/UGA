$(document).ready(function() {
	$('#slidesContainer').after('<div id="controls">').cycle({
		fx: 'fade',
		speed:  1000,
		timeout: 8000,
		pause: 1,
		pager:  '#controls'
	});
	$('#slideshow-off').click(function() { 
		$('#slidesContainer').cycle('pause'); 
		$('#slideshow-off').addClass('hide');
		$('#slideshow-on').removeClass('hide');
	});
	$('#slideshow-on').click(function() { 
		$('#slidesContainer').cycle('resume'); 
		$('#slideshow-on').addClass('hide');
		$('#slideshow-off').removeClass('hide');
	});
});