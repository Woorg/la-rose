$(function() {

	var $mapToggler = $('.contacts__map-top'),
		$mapContainer = $('.contacts__map-object');
	$mapToggler.on('click', function () {

		$(this)
			.toggleClass('contacts__map-top_active')
			.parent('.contacts__map')
			.toggleClass('contacts__map_active');
		$(this)
			.next().toggleClass('contacts__map-object_active');
	});

	// sert gallery

	$('.contacts__sert a').magnificPopup({
		type: 'image'
	});

});





