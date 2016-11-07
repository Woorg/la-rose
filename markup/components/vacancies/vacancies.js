$(function() {
	var vacanciesTrigger = $('.vacancies__item-top');

	vacanciesTrigger.on('click', function () {
		$(this).toggleClass('vacancies__item-top_active');
		$(this).next().toggleClass('vacancies__item-body_active');
	});

});
