/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const inputFile = () => {
		var inputs = document.querySelectorAll('[inputfile-js]');
		
		Array.prototype.forEach.call(inputs, function(el) {
			var label	 = el.nextElementSibling,
				labelVal = label.innerHTML;
			
			el.addEventListener('change', function(ev) {
				var fileName = '';
				
				fileName = ev.target.value.split('\\').pop();
				
				if(fileName)
					label.querySelector('span').innerHTML = fileName;
				else
					label.innerHTML = labelVal;
			});
		});
	};
	
	
	const changeViewBox = () => {
		$('[change-view-js]').change((ev) => {
			const boxNode = $('.statusDash__box-wrapper');
			
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
	const initNative = () => {
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
