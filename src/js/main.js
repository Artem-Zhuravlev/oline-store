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
	})
})
