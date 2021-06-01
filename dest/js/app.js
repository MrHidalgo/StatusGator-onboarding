"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initValidation
 *
 * @description
 */
var initValidation = function initValidation() {
	var validationErrorPlacement = function validationErrorPlacement(error, element) {
		error.appendTo(element.closest('label'));
	};
	var validationHighlight = function validationHighlight(element) {
		$(element).closest('label').addClass('is-error');
	};
	var validationUnhighlight = function validationUnhighlight(element) {
		$(element).closest('label').removeClass('is-error');
	};

	/* FORM 1
 * =============== */
	var stepForm1 = $(document.formStep1);

	stepForm1.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onfocusout: function onfocusout(element) {
			$(element).valid();
		},
		// onkeyup: function(element) {
		// 	$(element).valid();
		// },
		rules: {
			step_1_industry: 'required',
			step_1_role: 'required'
		},
		messages: {
			step_1_industry: {
				required: "Please specify the Industry"
			},
			step_1_role: {
				required: "Please specify the Role"
			}
		}
	});

	$('#formStep1 select').change(function (ev) {
		$(ev.currentTarget).val().length > 0 ? $(ev.currentTarget).blur() : '';
	});

	$('[form-step-1-js]').on('click', function (ev) {
		if (stepForm1.valid()) {
			window.location = '/screen-2.html';
		}
	});

	/* FORM 2
 * =============== */
	var stepForm2 = $(document.formStep2);

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

	$('[form-step-2-js]').on('click', function (ev) {
		if (stepForm2.valid()) {
			window.location = '/screen-3.html';
		}
	});

	/* FORM 3
 * =============== */
	var formSearchOthers = $(document.formSearchOthers);

	formSearchOthers.validate({
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			search_others: 'required'
		},
		messages: {
			search_others: {
				required: "Please specify the Industry"
			}
		}
	});

	$('[form-search-others-js]').on('click', function (ev) {
		if (formSearchOthers.valid()) {
			/* ACTION */
		}
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var inputFile = function inputFile() {
		var inputs = document.querySelectorAll('[inputfile-js]');

		Array.prototype.forEach.call(inputs, function (el) {
			var label = el.nextElementSibling,
			    labelVal = label.innerHTML;

			el.addEventListener('change', function (ev) {
				var fileName = '';

				fileName = ev.target.value.split('\\').pop();

				if (fileName) label.querySelector('span').innerHTML = fileName;else label.innerHTML = labelVal;
			});
		});
	};

	var changeViewBox = function changeViewBox() {
		$('[change-view-js]').change(function (ev) {
			var boxNode = $('.statusDash__box-wrapper');

			boxNode.removeClass('is-2 is-4');

			switch ($(ev.currentTarget).val()) {
				case 'standard':
					boxNode.removeClass('is-2 is-4');
					break;
				case '2':
					boxNode.removeClass('is-2 is-4').addClass('is-2');
					break;
				case '4':
					boxNode.removeClass('is-2 is-4').addClass('is-4');
					break;
				default:
					break;
			}
		});
	};

	var formCB = function formCB() {
		$('[something-else-js]').change(function (ev) {
			$('.step__form-field--hidden').slideToggle(500);
		});

		$('.step__list').on('click', function (ev) {
			$(ev.currentTarget).toggleClass('is-active');
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initValidation();
		// ==========================================

		// callback
		inputFile();
		changeViewBox();
		formCB();
		// ==========================================
	};
	initNative();
})();