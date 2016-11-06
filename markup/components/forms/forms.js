$(function() {

	// delivery type

	var $deliveryRadio = $('.form__row-delivery-type input'),
		$deliveryCourier = $('.form__delivery-courier'),
		$deliverySelf = $('.form__delivery-self');


	$deliveryRadio.on('change', function () {
		if($('.form__row-delivery-type input[value="courier"]').is(':checked')) {
			$deliveryCourier.addClass('form__delivery-courier_active');
			$deliverySelf.removeClass('form__delivery-self_active');
		} else {
			$deliveryCourier.removeClass('form__delivery-courier_active');
			$deliverySelf.addClass('form__delivery-self_active');
		}

	});


});
