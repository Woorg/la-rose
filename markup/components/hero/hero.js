$(function() {

	var heroSlider = $('.hero__slider-list');

	heroSlider.owlCarousel({
		margin: 0,
		autoWidth: false,
		items: 1,
		loop: true,
		center: false,
		stagePadding: 0,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 800,
		navSpeed: 800
	});


});



