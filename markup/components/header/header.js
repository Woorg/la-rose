$(function() {

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

	$(window).on('resize', function() {
		if( $(window).width() > 768 ) {

			if ( headCatList.hasClass('head-catalog__list-w_active') ) {

				headCatList.removeClass('head-catalog__list-w_active');
			}
		}
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

	$(window).on('resize', function() {
		if( $(window).width() > 768 ) {

			if ( headAuthTabs.hasClass('tabs_active') ) {

				headAuthTabs.removeClass('tabs_active');
			}
		}
	});

	// head search

	var headerSearchTrigger = $('.header-search__button'),
		headerSearchInput = $('.header-search__input-w');

	headerSearchTrigger.on('click', function (e) {
		e.stopPropagation();
		headerSearchInput.toggleClass('header-search__input-w_active');

		$(document).on('click', function(e) {
			if (!$(e.target).closest('.header-search').length) {
				headerSearchInput.removeClass('header-search__input-w_active');
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


	// head popup

	var $headerPopupLink = $('.head-user-auth__link'),
		$headerPopup = $('.head-popup'),
		$headerPhonesButton = $('.header-phones__button');
		$headerRegPopupClose = $('.head-user-auth__popup-close');

	$headerPopupLink.on('click', function (e) {
		e.stopPropagation();
		if($headerPopup.hasClass('head-popup_active')) {

		} else {
			$(this).next().toggleClass('head-popup_active');
		};

		$(document).on('click', function(e) {
			if (!$(e.target).closest($headerPopup).length) {
				$headerPopup.removeClass('head-popup_active');
			}
		});

	});

	$headerPhonesButton.on('click', function (e) {
		e.stopPropagation();
		if($headerPopup.hasClass('head-popup_active')) {

		} else {
			$(this).next().toggleClass('head-popup_active');
		};

		$(document).on('click', function(e) {
			if (!$(e.target).closest($headerPopup).length) {
				$headerPopup.removeClass('head-popup_active');
			}
		});

	});

	$headerRegPopupClose.on('click', function (e) {
		e.stopPropagation();
		$headerPopup.removeClass('head-popup_active');

	});


	// tooltip

	var $tooltipTrigger = $('.header__pers-order-faq'),
		$tooltip = $('.popup_pers-order'),
		$tooltipClose = $('.popup_pers-order .popup__close');

	$tooltipTrigger.on('click', function (e) {
		console.log('click');
		e.stopPropagation();
		if($tooltip.hasClass('popup_pers-order-active')) {

		} else {
			$(this).parent().next().toggleClass('popup_pers-order-active');
		};

		$(document).on('click', function(e) {
			if (!$(e.target).closest($tooltip).length) {
				$tooltip.removeClass('popup_pers-order-active');
			}
		});

	});

	$tooltipClose.on('click', function (e) {
		e.stopPropagation();
		$tooltip.removeClass('popup_pers-order-active');

	});


});








