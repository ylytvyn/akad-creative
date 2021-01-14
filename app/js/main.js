'use strict';

(function($){
	$(document).ready(function() {
		// Isotope
		let sizer = $('<div/>').css('width', '30%');

		let $grid = $('.gallery__list').isotope({
			itemSelector: '.gallery__item',
			percentPosition: true,
			masonry: {
				columnWidth: sizer[0]
			}
		});

		$('.filter__link').on('click', function() {
			let filterValue = $(this).attr('data-filter'),
				filter = filterValue === '' ? '' : `[data-name="${filterValue}"]`;
			
			$('.filter__link').removeClass('filter__link--active');
			$(this).addClass('filter__link--active');

			$grid.isotope({ filter: filter });
		});

		// Animations
		AOS.init();

		// Header
		$(window).scroll(() => {
			if ($(window).scrollTop() > 30) {
				$('.header--page').addClass('header--small');
			} else {
				$('.header--page').removeClass('header--small');
			}
		});
	});
})(jQuery);
