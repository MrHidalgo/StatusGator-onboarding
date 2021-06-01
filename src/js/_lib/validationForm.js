

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
};
