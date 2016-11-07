$(function() {

	var $portfolioCarousel = $('.carousel_style-first .carousel__list'),
		sliderOptions = {
			margin: 16,
			items: 4,
			loop: true,
			nav: true,
			// autoWidth: true,
			responsive: {
				1180: {
					items: 4
				},
				1024: {
					items: 3
				},
				768: {
					items: 3
				},
				500: {
					items: 3
				},
				0: {
					items: 2
				}
			}
		};


	$portfolioCarousel.owlCarousel(sliderOptions);



	// gallery

	$('.carousel__item-img a').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});


});
