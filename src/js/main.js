$(document).ready(function() {
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
	})
})
