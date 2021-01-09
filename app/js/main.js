'use strict';

(function($){
	$(document).ready(function() {
		// Isotope
		let $grid = $('.gallery__list').isotope({
			itemSelector: '.gallery__item',
			layoutMode: 'fitRows'
		});

		$('.filter__link').on('click', function() {
			let filterValue = $(this).attr('data-filter');
			
			$grid.isotope({ filter: filterValue });
		});
	});
})(jQuery);
