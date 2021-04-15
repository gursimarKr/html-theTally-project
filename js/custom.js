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

  $('.card-slider').slick({
      speed: 500,
      dots: false,
      infinite: false,
      slidesToShow: 3,
      centerMode: false,
      slidesToScroll: 2,
      nextArrow: $('.slick_next.slick_next_post'),
      prevArrow: $('.slick_previous.slick_previous_post'),
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


  $('.review-panel-show .btn').click(function(){
    $(this).parents('.review-panel').addClass('show');
    $(this).parents('.review-panel').siblings().removeClass('show');
  });


  var myModalEl = document.getElementById('reviewModal')
  myModalEl.addEventListener('shown.bs.modal', function (event) {
    $('#textarea').on('keyup', function(event) {
     var len = $(this).val().length;
     var charVal = 500 - len;
     if (len <= 500) {
        $("#charNum").html(charVal);
     }
  });
  })

  $('.profile_detail .form-check-input').change(function(){
    console.log($(this).val());
  })

});