//****************
//  Preloader
//****************

$(window).on('load',function() {
	$('.spinner').fadeOut('slow',function(){
		$('.preloader').remove();
	});
});


//****************
//  owl-carousel
//****************
$(".owl-carousel").owlCarousel();
$('.owl-carousel').owlCarousel({
	  items:6,
	  loop:true,
    margin:10,
		autoplay:true,
	  autoplayTimeout:1000,
	  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
