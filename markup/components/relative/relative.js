$(function() {

	var $presents = $('.relative_style-first .relative__list'),
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

				0: {
					items: 2
				}
			}
		};

	$presents.owlCarousel(sliderOptions);

	var $relativeSlider = $('.relative_style-second .relative__list');

	if( $(this).width() < 768 ) {

		$relativeSlider
			.parent()
			.removeClass(' relative_style-second')
			.addClass(' relative_style-first')

		$relativeSlider
			.addClass('owl-carousel')
			.owlCarousel(sliderOptions);

	};

	$(window).on('resize', function () {
		if( $(this).width() < 768 ) {

			$relativeSlider
				.parent()
				.removeClass('relative_style-second')
				.addClass(' relative_style-first');

			$relativeSlider
				.addClass('owl-carousel')
				.owlCarousel(sliderOptions);

		} else {

			$relativeSlider
				.removeClass('owl-carousel')
				.parent()
				.removeClass('relative_style-first')
				.addClass(' relative_style-second');

			$relativeSlider.trigger('destroy.owl.carousel');


		};


	});



});




