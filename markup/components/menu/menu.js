$(document).ready(function () {
	var menuList = $('.menu__list-w');
	var menuTrigger = $('.header__menu-trigger');

	menuTrigger.on('click', function () {
		menuList.toggleClass('menu__list-w_active');
	});
});
