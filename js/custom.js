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


  $('.profile_detail input[type="radio"]').click(function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(this).parents('.row').find(".profile_detail_box").not(targetBox).hide();
    $(targetBox).show();
  });

  $count = 2;
  $('body').on('click', '.add-child', function(e){
    e.preventDefault();
    $(this).parent().hide();
    var $clone = `<div class="profile_detail_box yeskids" style="display: block;"><div class="mb-4 profile_detail_subheading border-bottom pb-2 text-uppercase">Child ${$count}</div><h4 class="mb-3">What is their date of birth?</h4><div class="row align-items-end"><div class="col-sm-6 col-md-4"><label class="form-label">Select Month</label><select class="form-select"><option selected>xxx</option><option value="1">xxx</option><option value="2">xxx</option><option value="3">xxx</option></select></div><div class="col-sm-6 col-md-4"><label class="form-label">Select Year</label><select class="form-select"><option selected>2000</option><option value="1">2001</option><option value="2">2002</option><option value="3">2003</option></select></div><div class="col-sm-6 col-md-4"><button class="btn add-child mb-0 w-100 btn-outline-blue">Add Another Child</button></div></div></div>`;
      // alert($clone)
    $('.profile_detail_box_childs').append($clone);

    $count++;
  })

});

var myModalEl = document.getElementById('reviewModal');
if(myModalEl){
  myModalEl.addEventListener('shown.bs.modal', function (event) {
      $('#textarea').on('keyup', function(event) {
       var len = $(this).val().length;
       var charVal = 500 - len;
       if (len <= 500) {
          $("#charNum").html(charVal);
       }
    });
  })
}