$(function(){

    $(document).ready(function() {
        $('#fullpage').fullpage({
            autoScrolling: true,
            scrollHorizontally: true,
            fitToSection: true,
            v2compatible: false,
            lockAnchors: true,
            responsiveWidth: 1025,
            responsiveHeight: 700,
            afterLoad: function(origin, destination, direction) {
                let count = destination.index + 1,
                  all = $(".section").length,
                  height = $(".pagination-progress").height() / all,
                  position = height * destination.index;
                
                let nul = "0";
                if (count > 9) {
                nul = ""
                } else {
                nul = "0"
                }
                $(".pagination-active__item").text( nul + count); 
                  
                $(".pagination-progress__item").css({ height: height, top: position });
                
              }
        });
    
        $.fn.fullpage.setAllowScrolling(true);

        new fullpage('#fullpage', {
            anchors:['section1',
                     'section2',
                     'section3',
                     'section4',
                     'section5',
                     'section6',
                     'section7',
                     'section8',
                     'section9',
                     'section10']
        });
        
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        // prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
        // nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>'
    });

    $(window).scroll(function () {
        var height = $('.header__top').outerHeight();
        
         if($(this).scrollTop() > 100){
             $('.header__top').addClass('sticky');    
         }else{
             $('.header__top').removeClass('sticky');
         }
             
     });
     
     $('.btn').on('click', function(){
        $('.play').toggleClass('pause')
    });

    $('.label-password').on('click', '.password-control', function(){
        if ($('.input-password').attr('type') == 'password'){
            $(this).addClass('view');
            $('.input-password').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.input-password').attr('type', 'password');
        }
        return false;
    });

    $('.clearbtn').on('click', function(e){
        e.preventDefault();
        
        var val = $('.input-password').val();
        
        if(val.length >= 1){
          $('.input-password').val('');
        }
    });
    $('.clearBtn').on('click', function(e){
        e.preventDefault();
        
        var val = $('.input-email').val();
        
        if(val.length >= 1){
          $('.input-email').val('');
        }
    });

});