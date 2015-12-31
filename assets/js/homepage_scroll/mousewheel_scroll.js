$(document).ready(function(){


    //Set each section's height equals to the window height
    $('.scroll-anim').height($(window).height());
    /*set the class 'active' to the first element 
     this will serve as our indicator*/
    $('.scroll-anim').first().addClass('active');

    /* handle the mousewheel event together with 
     DOMMouseScroll to work on cross browser */
    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();//prevent the default mousewheel scrolling
        var active = $('.scroll-anim.active');
        var indactive = $('.scroll-indicators li.active');
        //get the delta to determine the mousewheel scrol UP and DOWN
        var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
        
        //if the delta value is negative, the user is scrolling down
        if (delta < 0) {
            //mousewheel down handler
            next = active.next('.scroll-anim');

            //indicator
            nextind = indactive.next('li');
            //check if the next section exist and animate the anchoring
            if (next.length) {
               /*setTimeout is here to prevent the scrolling animation
                to jump to the topmost or bottom when 
                the user scrolled very fast.*/
                var timer = setTimeout(function () {
                    /* animate the scrollTop by passing 
                    the elements offset top value */
                    $('body, html').animate({
                        scrollTop: next.offset().top
                    }, 'slow');
                    
                    // move the indicator 'active' class
                    next.addClass('active')
                        .siblings().removeClass('active');
                    nextind.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        } else {
            //mousewheel up handler
            /*similar logic to the mousewheel down handler 
            except that we are animate the anchoring 
            to the previous sibling element*/
            prev = active.prev('.scroll-anim');

            //indicator
            prevind = indactive.prev('li');

            if (prev.length) {
                var timer = setTimeout(function () {
                    $('body, html').animate({
                        scrollTop: prev.offset().top
                    }, 'slow');

                    prev.addClass('active')
                        .siblings().removeClass('active');
                    prevind.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        }
    });


    //onclick indicators scroll animation
      $('.scroll-indicators > li').click(function(){
        $('.scroll-indicators > li').removeClass('active')
        $(this).addClass('active');
        var dval = $(this).data('tab');

        $('.scroll-anim').each(function(){
            var scrolldval = $(this).data('value');

            if(dval == scrolldval) {
              $(".scroll-anim").removeClass('active');
              $(this).addClass('active');
              $('body, html').animate({
                          scrollTop: $(this).offset().top
                      }, 'slow');
            }
            else {
              $(this).removeClass('active');
            }

        });

      });
    // End of onclick indicator scroll animation

    //homepage mousescroll animation
  $('#headerscroll').click(function(){
      var scrollsec = $(this).parents('.scroll-anim');
      $('body, html').animate({scrollTop: scrollsec.next().offset().top}, 'slow');
      scrollsec.removeClass('active');
      scrollsec.next().addClass('active');
      $('.scroll-indicators > li').removeClass('active');
      $('.scroll-indicators > li:eq(1)').addClass('active');
  });



   $('.scroll-indicators li').click(function () {
        var value = $(this).attr('data-tab');
    if( value == 2)
    {
        $(this).addClass('change-clr');
        $('li').addClass('other-li');
    }
    else {
        $('li').removeClass('change-clr');
        $('li').removeClass('other-li');
    }

   });


    $('.appln').mouseenter(function () {
        $('.appln-statergies').removeClass('hide');
        $('.it-solutions').addClass('hide');
    });

    $('.it-solution').mouseenter(function () {
        $('.it-solutions').removeClass('hide');
        $('.appln-statergies').addClass('hide');
    });

    $(window).resize(function(){
        triangleborder();
    });

    triangleborder();

    function triangleborder() {
        var height = window.innerHeight;
        height = height < 700 ? 700 : height;
        height = height > 958 ? 958 : height;

        $('.app-banner').height(height);
        
        $('.app-banner .triangle.top').css({'border-top-width': (height*1.2+14), 'border-right-width': (window.innerWidth*1.2+14)});
        $('.app-banner .triangle.bottom').css({'border-bottom-width': (height*0.8), 'border-left-width': (window.innerWidth*0.8)});
    }



});