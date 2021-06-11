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
	
	
	const formCB = () => {
		$('[something-else-js]').change((ev) => {
			$('.step__form-field--hidden').slideToggle(500);
		});
		
		$('.step__list').on('click', (ev) => {
			$(ev.currentTarget).toggleClass('is-active');
			
			if($('.step__list.is-active').length > 0) {
				$('.c-btn__error').fadeOut(500);
			}
		});
		
		$('[skip-organization-js]').on('click', (ev) => {
			if($(ev.currentTarget).hasClass('is-active')) {
				$(ev.currentTarget).removeClass('is-active');
				$('[form-step-6-js]').attr('style', '');
				$('[input-organization-js]').attr('required', true);
			} else {
				$(ev.currentTarget).addClass('is-active');
				$('[form-step-6-js]').css({'pointerEvents': 'none'});
				$('[input-organization-js]').removeAttr('required');
			}
		});
	};
	
	
	const pushStepAnimation = () => {
		const videoServiceDown = $('#videoServiceDown');
		
		$('[push-js]').on('click', (ev) => {
			videoServiceDown[0].play();
			
			$('.step__btn, .step__container-content, .step__push').hide();
			
			$('.step__hidden-1').fadeIn(500);
		});
		
		videoServiceDown.on('ended', (event) => {
			setTimeout(() => {
				$('.step__hidden-1, .step__push').hide();
				$('.step__hidden-2').fadeIn(500);
				
				setTimeout(() => {
					$('.step__down-box.is-load').addClass('is-send');
					$('.step__down-box.is-load').siblings('.step__down-box').eq(0).addClass('is-send');
				}, 4000);
				
				setTimeout(() => {
					$('.step__hidden-2').hide();
					$('.step__hidden-3').fadeIn(500);
					
					$('.step__updating-num img').attr('src', $('.step__updating-num img').attr('data-src'));
					$('.step__updating-num span').fadeOut(100);
				}, 5500);
				
				setTimeout(() => {
					$('.step__updating-header').hide();
					$('.step__updating-header--hidden').fadeIn(500);
					
					$('.step__updating-list').eq(0).addClass('is-down');
					$('.step__updating-list').eq(1).addClass('is-down').delay(1000);
					
					setTimeout(() => {
						window.location = '/success-page.html';
					}, 1750);
					
				}, 10750);
			}, 100);
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
		initValidation();
		// ==========================================

		// callback
		inputFile();
		changeViewBox();
		formCB();
		pushStepAnimation();
		// ==========================================
	};
	initNative();
})();
