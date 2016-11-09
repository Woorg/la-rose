$(function() {

	var menuList = $('.menu__list-w'),
		menuTrigger = $('.header__menu-trigger');

	menuTrigger.on('click', function (e) {
		e.stopPropagation();

		menuList.toggleClass('menu__list-w_active');

		$(document).on('click', function(e) {
			if (!$(e.target).closest(menuList).length) {
				menuList.removeClass('menu__list-w_active');
			}
		});
	});

	$(window).on('resize', function() {
		if( $(window).width() > 768 ) {

			if ( menuList.hasClass('menu__list-w_active') ) {

				console.log(menuList.hasClass('menu__list-w_active'));

				menuList.removeClass('menu__list-w_active');
			}
		}
	});


});




