$(function() {

	// product image slider

	var $sync1 = $(".product-image-big"),
		$sync2 = $(".product-image-thumb"),
		flag = false,
		duration = 100;

	$sync1
		.owlCarousel({
			items: 1,
			margin: 0,
			nav: false,
			dots: false
			// animateOut: 'fadeOut'
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;
				$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

	$sync2
		.owlCarousel({
			margin: 13,
			items: 2,
			nav: false,
			dots: false,
			center: false,
			loop: false,
			mouseDrag: true,
			touchDrag: false
		})
		.on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});


	// gallery

	$('.product-image-big__img a').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true,
		},
		callbacks: {
			buildControls: function() {
				// re-appends controls inside the main container
				this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
			}
		}
	});


});



