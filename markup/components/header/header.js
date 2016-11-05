(function () {

	$(document).ready(function () {

		// sticky header

		var headerHeight = $('.header').height(),
			header = $('.header'),
			hero = $('.hero'),
			main = $('.main');

		$(window).on('scroll', function () {
			if ($(this).scrollTop() > headerHeight ) {
				if ( main.hasClass('main_inner')) {
					main.css("marginTop",headerHeight);
					header.addClass('header_fixed');
				} else {
					hero.css("marginTop",headerHeight);
					header.addClass('header_fixed');
					main.css("marginTop",0);
				}
			} else {
				main.css("marginTop",0);
				hero.css("marginTop",0);
				header.removeClass('header_fixed');
			}
		});

		// head catalog

		var headCatButton = $('.head-catalog__button'),
			headCatList = $('.head-catalog__list-w');

		headCatButton.on('click' , function (e) {
			e.stopPropagation();
			headCatList.toggleClass('head-catalog__list-w_active');

			$(document).on('click', function(e) {
				if (!$(e.target).closest(headCatList).length) {
					if($(headCatList).is(":visible")) {
						headCatList.removeClass('head-catalog__list-w_active');
					}
				}
			});
		});



		// head auth

		var headAuthTrigger = $('.head-user-auth__icon'),
			headAuthTabs = $('.head-user-auth .tabs');

		headAuthTrigger.on('click', function (e) {
			e.stopPropagation();
			headAuthTabs.toggleClass('tabs_active');

			$(document).on('click', function(e) {
				if (!$(e.target).closest(headAuthTabs).length) {
					headAuthTabs.removeClass('tabs_active');
				}
			});
		});


		// head search

		var headerSearchTrigger = $('.header-search__button'),
			headerSearchInput = $('.header-search__input');

		headerSearchTrigger.on('click', function (e) {
			e.stopPropagation();
			headerSearchInput.toggleClass('header-search__input_active');

			$(document).on('click', function(e) {
				if (!$(e.target).closest('.header-search').length) {
					headerSearchInput.removeClass('header-search__input_active');
				}
			});

		});




		// to top

		var $toTopButton = $('.footer__to-top')

		$(window).on('scroll', function (e) {
			e.stopPropagation();
			if ($(this).scrollTop() >= 300) {
				$toTopButton.show();
			} else {
				$toTopButton.hide();
			}
		});

		$toTopButton.on('click', function (e) {
			e.stopPropagation();
			$('body, html').animate({
				scrollTop: 0
			}, 500);
		});


		// $(window).on('resize', function (e) {
		// 	e.stopPropagation();
		// 	if ($(this).width() <= 1180) {
		// 		$toTopButton.hide();
		// 	} else {
		// 		$toTopButton.show();
		// 	}
		// });





	});

}) ();
