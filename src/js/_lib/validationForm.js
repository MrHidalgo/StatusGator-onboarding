

/**
 * @name initValidation
 *
 * @description
 */
const initValidation = () => {
	const validationErrorPlacement = function(error, element) {
		error.appendTo(element.closest('label'));
	};
	const validationHighlight = (element) => {
		$(element).closest('label').addClass('is-error');
	};
	const validationUnhighlight = (element) => {
		$(element).closest('label').removeClass('is-error');
	};
	
	/* FORM 1
	* =============== */
	const stepForm1 = $(document.formStep1);
	
	stepForm1.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onfocusout: function(element) {
			$(element).valid();
		},
		// onkeyup: function(element) {
		// 	$(element).valid();
		// },
		rules: {
			step_1_industry: 'required',
			step_1_role: 'required',
		},
		messages: {
			step_1_industry: {
				required: "Please specify the Industry"
			},
			step_1_role: {
				required: "Please specify the Role",
			},
		}
	});
	
	$('#formStep1 select').change((ev) => {
		$(ev.currentTarget).val().length > 0 ? $(ev.currentTarget).blur() : '';
	});
	
	$('[form-step-1-js]').on('click', (ev) => {
		if(stepForm1.valid()) {
			window.location = '/screen-2.html';
		}
	});
	
	
	/* FORM 2
	* =============== */
	const stepForm2 = $(document.formStep2);
	
	stepForm2.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		// onfocusout: function(element) {
		// 	$(element).valid();
		// },
		// onkeyup: function(element) {
		// 	$(element).valid();
		// },
		rules: {
			step_2_checkbox_1: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			},
			step_2_checkbox_2: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			},
			step_2_checkbox_3: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			},
			step_2_checkbox_4: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			},
			step_2_checkbox_5: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			},
			step_2_checkbox_6: {
				require_from_group: [1, "[id^='step_2_checkbox_']"]
			}
		}
	});
	
	$('[form-step-2-js]').on('click', (ev) => {
		if(stepForm2.valid()) {
			window.location = '/screen-3.html';
		}
	});
	
	
	/* FORM 3
	* =============== */
	const formSearchOthers = $(document.formSearchOthers);
	
	formSearchOthers.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			search_others: 'required',
		},
		messages: {
			search_others: {
				required: "Please specify the Industry"
			},
		}
	});
	
	$('[form-search-others-js]').on('click', (ev) => {
		if(formSearchOthers.valid()) {
			/* ACTION */
		}
	});
	
	$('[step-3-js]').on('click', (ev) => {
		if($('.step__list.is-active').length > 0) {
			window.location = '/screen-4.html';
		} else {
			$('.c-btn__error').fadeToggle(500);
		}
	});
	
	
	/* FORM 5
	* =============== */
	/*const stepForm5 = $(document.formStep5);
	
	stepForm5.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			step_5_service: 'required',
			step_5_pageTitle: 'required',
			step_5_pageSubtitle: 'required',
			step_5_file: 'required',
			step_5_domain: 'required',
		},
		messages: {
			step_5_service: {
				required: "Please specify the Service Statuses"
			},
			step_5_pageTitle: {
				required: "Please specify the Page Title"
			},
			step_5_pageSubtitle: {
				required: "Please specify the Page subtitle"
			},
			step_5_file: {
				required: "Please specify the Logo"
			},
			step_5_domain: {
				required: "Please specify the Custom Domain"
			},
		}
	});
	
	$('#formStep5 select, #formStep5 input[type="file"]').change((ev) => {
		$(ev.currentTarget).val().length > 0 ? $(ev.currentTarget).blur() : '';
	});
	
	$('[form-step-5-js]').on('click', (ev) => {
		if(stepForm5.valid()) {
			/!* ACTION *!/
			window.location = '/screen-6.html';
		}
	});*/
	
	
	/* FORM 6 & 7
	* =============== */
	const stepForm6 = $(document.formStep6),
		stepForm7 = $(document.formStep7);
	
	stepForm6.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			step_6_organization_name: 'required',
		},
		messages: {
			step_6_organization_name: {
				required: "Please specify the Organization Name"
			}
		}
	});
	
	stepForm7.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			step_7_email: {
				required: true,
				email: true
			}
		},
		messages: {
			step_7_email: {
				required: "Please specify the Email",
				email: "Must format - name@domain.com"
			}
		}
	});
	
	$('[form-step-6-js]').on('click', (ev) => {
		if(stepForm6.valid()) {
			/* ACTION */
		}
	});
	
	$('[form-step-7-js]').on('click', (ev) => {
		if(stepForm7.valid()) {
			/* ACTION */
		}
	});
};
