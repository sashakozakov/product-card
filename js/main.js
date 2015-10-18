;(function($){
	$(document).ready(function(){
		var slider = $('.ba-slider');

		//slider init
		slider.slick({
			dots: true
		});

		//qty up & down
		var qtyField = $('.ba-product__qty-field'),
			qtyUp = $('.ba-product__qty-up'),
			qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(++oldVal);
		});

		qtyDown.on('click', function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(--oldVal === 0 ? 1 : oldVal);
		});
	});
})(jQuery);
