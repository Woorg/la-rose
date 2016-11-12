$(function() {

	$('.director-email').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		midClick: true
	});



	$('.modlink').sVmegaBox({
		 type:"tooltip",
		 modePosition:"thisLink",
		 ShowMask:false,
		 callBackCloseMask:function(){
		   $('#one_click').find('input[name=NAME_ONE_CLICK]').val("");
		   $('#one_click').find('input[name=PRICE_ONE_CLICK]').val("");
		   $('#one_click').find('input[name=PRODUCTID_ONE_CLICK]').val("");
		 },
		 callBackBeforeClick:function(link,box){
			$.Closed({generalTimeEffect:0});
			var name = link.data('name'),
				price = link.data('price'),
				productid = link.data('productid');

			box.find('input[name=name]').val('');
			box.find('input[name=phone]').val('');

			box.find('input[name=NAME_ONE_CLICK]').val(name);
			box.find('input[name=PRICE_ONE_CLICK]').val(price);
			box.find('input[name=PRODUCTID_ONE_CLICK]').val(productid);
		 }
		});

		// $('#one_click form').sVformsValid({
		// 	textErrorColor:'#ffffff',
		// 	backgroundError:'#EC8D8D',
		// 	paddingError:'3px 5px',
		// 	fontSizeTextError:'12px',
		// 	fontFamilyTextError:"PT Sans",
		// 	ajaxSend:true,
		// 	SuccesValid:function(e){
		// 	data = $(e).serialize();
        //
		// 	$.ajax({
		// 		url: '/ajax/add_fast_order.php',
		// 		data: data,
		// 		type: 'POST',
		// 		success: function(data) {
		// 		// alert(data);
		// 		$(e).hide();
		// 		$(".afteroneclick").show();
		// 		setTimeout(function(f){
		// 			$('#one_click form').show();
		// 			$(".afteroneclick").hide();
		// 		},2500);
		// 		// console.log(data);
		// 		},
		// 		error: function(data) {
		// 			alert(data);
		// 		}
		// 	});
		// 	/* Здесь можно выполнить ajax-запрос, предварительно расскомментировав
		// 	   опцию ajaxSend(выше)
		// 	 */
		// 	}
		// });



});



