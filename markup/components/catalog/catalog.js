(function () {

	$(document).ready(function() {

		var catalogCarousel = $('.products');

		catalogCarousel.owlCarousel({
			margin: 0,
			autoWidth: false,
			items: 3,
			loop: true,
			center: false,
			stagePadding: 0,
			nav: true,
			dots: false
		});


	});

}) ();
