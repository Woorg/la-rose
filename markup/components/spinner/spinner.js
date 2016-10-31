$(document).ready(function () {
	var amountSpinner = $('.spinner__input');
	var amountSpinnerUp = $('.spinner__button_up');
	var amountSpinnerDown = $('.spinner__button_down');

	amountSpinner.spinner({
		max: 50,
		min: 1,
		step: 1
	});

	amountSpinnerUp.click(function () {
		$(this).parent().siblings('.ui-spinner').find('.spinner__input').spinner('stepUp');
	});

	amountSpinnerDown.click(function () {
		$(this).parent().siblings('.ui-spinner').children('.spinner__input').spinner('stepDown');
	});
});






