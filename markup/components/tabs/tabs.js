$(function() {

	$('.tabs__nav-link').on('click', function (e) {
		e.preventDefault();
		var tabsItem = $(this).closest('.tabs__nav-item'),
			tabsTab = $(this).closest('.tabs').find('.tabs__tab');
			tabPos = tabsItem.data('class');

		tabsTab.filter('.tabs__tab_' + tabPos)
			.add(tabsItem)
			.addClass('active')
			.siblings()
			.removeClass('active');

	});


});


