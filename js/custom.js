$(document).ready(function(){
  $('.multiple-items').each(function(){
  	$(this).slick({
      speed: 300,
      dots: false,
      infinite: true,
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

  
      let max_fields = 10;
      let wrapper = $(".find_due_child");
      let add_button = $(".btn-another-child");
      let x = 1;
      $(add_button).click(
        function(){
          if(x < max_fields){
            x++;
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
          }
        }
      )

});