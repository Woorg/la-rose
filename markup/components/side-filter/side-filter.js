$(document).ready(function() {

	var filterToggler = $('.side-filter__top-title');
	var filterBody = $('.side-filter__body');
	filterToggler.on('click', function () {
		filterBody.toggleClass('side-filter__body_active')
	});


	var rangeSlider = $('.price-slider__slider');
	var priceTextFrom = $('.price-slider__input#price-from');
	var priceTextTo = $('.price-slider__input#price-to');
	var priceInputFrom = $('.price-slider__price-from span');
	var priceInputTo = $('.price-slider__price-to span');

	// Range slider
	rangeSlider.slider({
		min: 800,
		max: 26600,
		values: [ 800, 26600 ],
		range: true,
		step: 1,
		slide: function (event, ui) {
			priceTextFrom.val( ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');
			priceTextTo.val( ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');

			priceInputFrom.text(ui.values[0]);
			priceInputTo.text(ui.values[1]);

			$('.price-slider__input#price-from').val(ui.values[0]);
			$('.price-slider__input#price-to').val(ui.values[1]);
		}
		// change: function(event, ui) {
		// 	$('.filter__price-input#price-from').val(ui.values[0]);
		// 	$('.filter__price-input#price-to').val(ui.values[1]);
		// }
	});

	// $('.filter__price-input#price-from').val($('.filter__range-slider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");
	// $('.filter__price-input#price-to').val($('.filter__range-slider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");


	// $('.range-slider__input#price-from').keyup(function () {
	// 	$('.range-slider__slider').slider('values', 0, this.value);
	// });
	// $('.range-slider__input#price-to').keyup(function () {
	// 	$('.range-slider__slider').slider('values', 0, this.value);
	// });


});


