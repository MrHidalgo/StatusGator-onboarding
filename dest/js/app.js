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
		// ==========================================

		// callback
		inputFile();
		changeViewBox();
		// ==========================================
	};
	initNative();
})();