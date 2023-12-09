$(document).ready(function(){
    $(".search-icn").click(function(){
     $(".search-icn").hide(),
     $(".search-close-icn").fadeIn(800),
     $("#search").fadeIn(800);
    });
    $(".search-close-icn").click(function(){
     $(".search-close-icn").hide(),
     $("#search").hide();
     $(".search-icn").fadeIn(800);
    });

    $('.slickslider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true
    });
    $('.slickslider').slickAnimation();

    $('.testimonial-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });

    window.onload = function () {
      var Shuffle = window.Shuffle;
      var element = document.querySelector('.shuffle-container');
      
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.shuffle-item'
      }); 
        
      $('.project-wrap ul li').on('click',function(e){
          e.preventDefault();
          $('li').removeClass('active');
          $(this).addClass('active'); 
          var keyword = $(this).attr('data-target');
          shuffleInstance.filter(keyword);
        });
      }

      });
      
        

  


 