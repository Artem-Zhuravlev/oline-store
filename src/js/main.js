$(document).ready(function() {

	if ($('.main-slider').length) {
		$('.main-slider').slick({
		slidesToShow: 1,
			prevArrow: ` 
				<button type="button" class="slick-prev">
					<img src="img/arr-left.png" alt="" />
				</button>
			`,
			nextArrow: ` 
				<button type="button" class="slick-next">
					<img src="img/arr-right.png" alt="" />
				</button>
			`
		});
	}
	
	if ($('.p-categories-slider').length) {
		$('.p-categories-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: ` 
				<button type="button" class="slick-prev">
					<img src="img/a-left.png" alt="" />
				</button>
			`,
			nextArrow: ` 
				<button type="button" class="slick-next">
					<img src="img/a-right.png" alt="" />
				</button>
			`
		});
	} 

	if ($('#range-slider').length) {
		$('#range-slider').slider({
			range: true,
			min: 0,
			max: 50000,
			values: [230, 35300],
			slide: function(event, ui) {
				$('#min').val(ui.values[0]);
				$('#max').val(ui.values[1]);
			}
		});
	}

	if($('#input-sort').length) {
		$('#input-sort').selectmenu();
	}

})
