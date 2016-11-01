// (function () {

	$(document).ready(function () {
		// hero slider

		var heroSlider = $('.hero__slider-list');

		heroSlider.owlCarousel({
			margin: 0,
			autoWidth: false,
			items: 1,
			loop: true,
			center: false,
			stagePadding: 0,
			nav: true,
			dots: false
		});

		var pageDescToggle = $('.page-desc__more'),
			pageDescText = $('.page-desc__text > p').length,
			pageDesc = $('.page-desc__text');

		console.log(pageDescText);

		pageDescToggle.on('click', function () {
			if(pageDescText > 250) {
				pageDesc.addClass('page-desc__text_active');

			} else {

			}
		});


	});

// }) ();
