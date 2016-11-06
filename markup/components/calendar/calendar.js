$(function() {


	var $calendar = $('.calendar'),
		$deliverySelfInput = $('#delivery-self-input');

	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	if($(window).width() > 1180) {
		$calendar.datepicker({
			altField: $deliverySelfInput
		});
	} else {
		$deliverySelfInput.datepicker();
	}

	$(window).on('resize', function () {

		if( $(this).width() > 1180 ) {
			$calendar.datepicker({
				altField: $deliverySelfInput
			});

		} else {
			$deliverySelfInput.datepicker('getDate');

		}

	});





});




