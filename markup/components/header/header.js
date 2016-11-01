(function () {

	$(document).ready(function () {

		// sticky header

		var headerHeight = $('.header').outerHeight(),
			header = $('.header');

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > headerHeight ) {
				header.addClass('header_fixed').fadeIn('slow');
			} else {
				header.removeClass('header_fixed');
			}
		});

		// head catalog

		var headCatButton = $('.head-catalog__button'),
			headCatList = $('.head-catalog__list-w');

		headCatButton.on('click' , function () {
			headCatList.toggleClass('head-catalog__list-w_active');
		});



		// head auth


		var headAuthTrigger = $('.head-user-auth__icon'),
			headAuthTabs = $('.head-user-auth .tabs');

		headAuthTrigger.on('click', function () {
			headAuthTabs.toggleClass('tabs_active');
		});


		// head search

		var headerSearchTrigger = $('.header-search__button'),
			headerSearchInput = $('.header-search__input');

		headerSearchTrigger.on('click', function () {
			headerSearchInput.toggleClass('header-search__input_active');
		});

	});

}) ();
