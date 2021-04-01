$(document).ready(function(){
  $('.multiple-items').each(function(){
  	$(this).slick({
      speed: 300,
      dots: false,
      infinite: false,
      slidesToShow: 4,
      centerMode: false,
      slidesToScroll: 2,
      variableWidth: true,
      nextArrow: $(this).siblings('.slick-arrows').find('.slick_next'),
      prevArrow: $(this).siblings('.slick-arrows').find('.slick_previous'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $(".category_menu a").on('click', function(){
    var $id = $(this).attr('href');
    var $pos = $($id).offset().top - 90 
    $('html, body').animate({
      scrollTop: $pos + 'px'
    }, 1);
  });

});