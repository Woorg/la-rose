$(document).ready(function () {

	var pageDescToggle = $('.page-desc__more'),
		pageDescText = $('.page-desc__text p').length,
		pageDesc = $('.page-desc__text');

	console.log(pageDescText);

	pageDescToggle.on('click', function () {
		if(pageDescToggle.text() == 'Показать') {
			pageDescToggle.text('Скрыть');
		} else {
			pageDescToggle.text('Показать');

		}
		pageDesc.toggleClass('page-desc__text_active');

	});


});
