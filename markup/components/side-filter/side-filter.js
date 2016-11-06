$(function() {

	var filterToggler = $('.side-filter__top-title');
	var filterBody = $('.side-filter__body');
	filterToggler.on('click', function () {
		filterBody.toggleClass('side-filter__body_active')
	});


	var rangeSlider = $('.price-slider__slider'),
		priceTextFrom = $('.price-slider__input#price-from'),
		priceTextTo = $('.price-slider__input#price-to'),
		priceInputFrom = $('.price-slider__price-from span'),
		priceInputTo = $('.price-slider__price-to span'),
		minVal = $('.price-slider__slider').data('min'),
		maxVal = $('.price-slider__slider').data('max');


	// Range slider

	rangeSlider.slider({
		min: minVal,
		max: maxVal,
		values: [ minVal, maxVal ],
		range: true,
		step: 1,
		slide: function (event, ui) {
			// priceTextFrom.val( ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');
			// priceTextTo.val( ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');

			priceInputFrom.text(ui.values[0]);
			priceInputTo.text(ui.values[1]);

			priceTextFrom.val(ui.values[0]);
			priceTextTo.val(ui.values[1]);
		}
		// change: function(event, ui) {
		// 	priceTextFrom.val(ui.values[0]);
		// 	priceTextTo.val(ui.values[1]);
		// }
	});

	// $('.filter__price-input#price-from').val($('.filter__range-slider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");
	// $('.filter__price-input#price-to').val($('.filter__range-slider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");


	priceTextFrom.keyup(function () {
		rangeSlider.slider('values', 0, this.value);
	});
	priceTextTo.keyup(function () {
		rangeSlider.slider('values', 1, this.value);
	});



});





