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


});




