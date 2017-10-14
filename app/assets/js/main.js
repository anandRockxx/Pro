//****************
//  Preloader
//****************

$(window).on('load',function() {
	$('.spinner').fadeOut('slow',function(){
		$('.preloader').remove();
	});
});
