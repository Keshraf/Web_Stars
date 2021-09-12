$('.slider-items').slick({
        autoplay:false,
		prevArrow:'.prev',
		nextArrow:'.next',
		slidesToShow:1,
		 fade: true,
		 centerMode: true,
		 centerPadding: '1px',
		cssEase: 'linear',
		  responsive: [
    {
          breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
      });