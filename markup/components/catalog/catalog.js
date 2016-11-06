$(function() {

	var catalogCarousel = $('.catalog .products');

	catalogCarousel.owlCarousel({
		margin: 0,
		autoWidth: false,
		items: 3,
		loop: true,
		center: false,
		stagePadding: 0,
		nav: true,
		dots: false,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			320: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 2
			},
			1180: {
				items: 3
			}
		}
	});

});




