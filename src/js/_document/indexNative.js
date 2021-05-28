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
		// ==========================================
	};
	initNative();
})();
