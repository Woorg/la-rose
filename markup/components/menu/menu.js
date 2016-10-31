(function () {
	$(document).ready(function () {
		var menuList = $('.menu__list');
		var menuBurger = $('.menu__burger');

		menuBurger.on('click', function () {
			menuList.toggle('.menu__list_active');
		});
	});
})
