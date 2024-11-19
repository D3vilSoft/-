$(document).ready(function() {

	$('#preloader-dots').delay(350).fadeOut(300,function() {
		$('#preloader').animate({opacity: '0'},300,function() {
			$('#preloader').fadeOut(10);
		});
	});

});