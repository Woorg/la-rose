$(function() {

	// delivery type

	var $deliveryRadio = $('.form__row-delivery-type input'),
		$deliveryCourier = $('.form__delivery-courier'),
		$deliverySelf = $('.form__delivery-self');


	$deliveryRadio.on('change', function () {
		if($('.form__row-delivery-type input[value="courier"]').is(':checked')) {
			$deliveryCourier.addClass('form__delivery-courier_active');
			$deliverySelf.removeClass('form__delivery-self_active');
		} else {
			$deliveryCourier.removeClass('form__delivery-courier_active');
			$deliverySelf.addClass('form__delivery-self_active');
		}

	});

	// validation

	var formPersonalOrder = $('#form_personal-order form'),
		feedbackForm = $('.form_feedback form'),
		personalData = $('.form_personal-data form'),
		personalDataSecond = $('.form_personal-data-second form'),
		deliveryForm = $('.form_delivery form'),
		deliveryFormSecond = $('.form_delivery-second form'),
		recipientForm = $('.form_recipient form'),
		recipientFormSecond = $('.form_recipient-second form'),
		recipientFormThird = $('.form_recipient-third form'),
		paymentForm = $('.form_payment form'),
		resumeForm = $('.form_resume form'),
		reviewForm = $('.form_review form'),
		personalSettingsForm = $('.form_settings form'),
		headPopupCallback = $('.head-popup_callback form'),
		headAuthlogin = $('.head-user-auth__form_login'),
		headAuthloginTab = $('#head-user-auth__form_login-tab'),
		headAuthReg = $('#head-user-auth__form_register'),
		headAuthRegTab = $('#head-user-auth__form_register-tab'),

		popupForm = $('.popup__form');

	formPersonalOrder.validate({
		rules: {
			po_cost_of_bouquets: {
				required: true
			},
			po_contacts: {
				required: true
			},
			po_desc: {
				required: true
			},
			po_captcha: {
				required: true
			}
		},
		messages: {
			po_cost_of_bouquets: {
				required: ''
			},
			po_contacts: {
				required: ''
			},
			po_desc: {
				required: ''
			},
			po_captcha: {
				required: ''
			}
		}
	});

	feedbackForm.validate({
		rules: {
			fb_name: {
				required: true
			},
			fb_phone: {
				required: true
			}
		},
		messages: {
			fb_name: {
				required: ''
			},
			fb_phone: {
				required: ''
			}
		}
	});

	personalData.validate({
		rules: {
			pd_name: {
				required: true
			},
			pd_phone: {
				required: true
			},
			pd_email: {
				required: true,
				email: true
			}
		},
		messages: {
			pd_name: {
				required: ''
			},
			pd_phone: {
				required: ''
			},
			pd_email: {
				required: '',
				email: ''
			}
		}
	});

	personalDataSecond.validate({
		rules: {
			pds_name: {
				required: true
			},
			pds_phone: {
				required: true
			},
			pds_email: {
				required: true,
				email: true
			}
		},
		messages: {
			pds_name: {
				required: ''
			},
			pds_phone: {
				required: ''
			},
			pds_email: {
				required: '',
				email: ''
			}
		}
	});


	deliveryForm.validate({
		rules: {
			deliv_street: {
				required: true
			},
			deliv_house: {
				required: true
			},
			deliv_appart: {
				required: true
			},
			deliv_date: {
				required: true
			}
		},
		messages: {
			deliv_street: {
				required: ''
			},
			deliv_house: {
				required: ''
			},
			deliv_appart: {
				required: ''
			},
			deliv_date: {
				required: ''
			}
		}
	});


	deliveryFormSecond.validate({
		rules: {
			delivs_street: {
				required: true
			},
			delivs_house: {
				required: true
			},
			delivs_appart: {
				required: true
			},
			delivs_date: {
				required: true
			}
		},
		messages: {
			delivs_street: {
				required: ''
			},
			delivs_house: {
				required: ''
			},
			delivs_appart: {
				required: ''
			},
			delivs_date: {
				required: ''
			}
		}
	});


	recipientForm.validate({
		rules: {
			recip_name: {
				required: true
			}
		},
		messages: {
			recip_name: {
				required: ''
			}
		}
	});


	recipientFormSecond.validate({
		rules: {
			recs_name: {
				required: true
			}
		},
		messages: {
			recs_name: {
				required: ''
			}
		}
	});

	recipientFormThird.validate({
		rules: {
			rect_name: {
				required: true
			}
		},
		messages: {
			rect_name: {
				required: ''
			}
		}
	});

	resumeForm.validate({
		rules: {
			resumeForm: {
				required: true
			}
		},
		messages: {
			resumeForm: {
				required: ''
			}
		}
	});

	reviewForm.validate({
		rules: {
			rev_message: {
				required: true
			}
		},
		messages: {
			rev_message: {
				required: ''
			}
		}
	});

	headPopupCallback.validate({
		rules: {
			callback_name: {
				required: true
			},
			callback_phone: {
				required: true
			}
		},
		messages: {
			callback_name: {
				required: ''
			},
			callback_phone: {
				required: ''
			}
		}
	});

	headAuthlogin.validate({
		rules: {
			hal_email: {
				required: true
			},
			hal_pass: {
				required: true
			},
			hal_captcha: {
				required: true
			}
		},
		messages: {
			hal_email: {
				required: ''
			},
			hal_pass: {
				required: ''
			},
			hal_captcha: {
				required: ''
			}
		}
	});

	headAuthloginTab.validate({
		rules: {
			hal_email: {
				required: true
			},
			hal_pass: {
				required: true
			}
		},
		messages: {
			hal_email: {
				required: ''
			},
			hal_pass: {
				required: ''
			}
		}
	});

	headAuthReg.validate({
		rules: {
			har_email: {
				required: true,
				email: true
			},
			har_pass: {
				required: true
			},
			har_pass_2: {
				equalTo: "#head-user-auth__input-repeat-pass",
				required: true
			},
			har_captcha: {
				required: true
			}
		},
		messages: {
			har_email: {
				required: '',
				email: ''
			},
			har_pass: {
				required: ''
			},
			har_pass_2: {
				required: '',
				equalTo: ''
			},
			har_captcha: {
				required: true
			}
		}
	});

	popupForm.validate({
		rules: {
			dir_name: {
				required: true
			},
			dir_phone: {
				required: true
			},
			dir_message: {
				required: true
			},
			dir_captcha: {
				required: true
			}
		},
		messages: {
			dir_name: {
				required: ''

			},
			dir_phone: {
				required: ''
			},
			dir_message: {
				required: ''
			},
			dir_captcha: {
				required: ''
			}
		}
	});

	headAuthRegTab.validate({
		rules: {
			har_email: {
				required: true,
				email: true
			},
			har_pass: {
				required: true
			},
			har_pass_2: {
				required: true,
				equalTo: "#head-user-auth__input-repeat-pass"
			}
		},
		messages: {
			har_email: {
				required: '',
				email: ''
			},
			har_pass: {
				required: ''
			},
			har_pass_2: {
				equalTo: '',
				required: ''
			}
		}
	});


});
