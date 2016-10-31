(function () {

	$(document).ready(function () {

		// sticky header

		var headerHeight = $('.header').outerHeight();
		var header = $('.header');
		console.log(headerHeight);

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > headerHeight ) {
				header.addClass('header_fixed');
			} else {
				header.removeClass('header_fixed');
			}
		});

		// head catalog

		var headCatButton = $('.head-catalog__button');
		var headCatList = $('.head-catalog__list');

		headCatButton.on('click' , function () {
			headCatList.toggle('.head-catalog__list_active');
		});





	});

}) ();
