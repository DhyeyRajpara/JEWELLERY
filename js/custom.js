$(document).ready(function(){
	// banner
	$(".banner").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow:'.banner_next',
		prevArrow:'.banner_prev'
	});

	// product
	$(".product").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow:'.product_next',
		prevArrow:'.product_prev',
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// experience
	$(".experience").slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// popular_product
	$(".popular_product").slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow:'.popular_product_next',
		prevArrow:'.popular_product_prev',
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});	

	// inner_product_image
	$(".inner_product_image").slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow:'.product_right_arrow',
		prevArrow:'.product_left_arrow',
		cssEase: 'linear'
	});

	// jewelry_slider_box
	$(".jewelry_slider_box").slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow:'.jewelry_next',
		prevArrow:'.jewelry_prev',
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// testimonials_slider
	$(".testimonials_slider").slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow:'.testimonials_right_arrow',
		prevArrow:'.testimonials_left_arrow',
		cssEase: 'linear'
	});

	// footer_image_slider
	$(".footer_image_slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// footer_insta_slider
	$(".footer_insta_slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
	});
});