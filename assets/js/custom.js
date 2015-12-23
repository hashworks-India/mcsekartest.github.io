$(document).ready(function(){

  $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');
    });
// js for carousel platform integeration

  
  //homepage dropdown
   $(".dropdown-link .dropdown").css({display: "none"});
        $(".dropdown-link").mouseover(function(){
            $(this).find(".dropdown").css({visibility: "visible",display: "none"}).show(268);;

      });

         $(".dropdown-link").mouseleave(function(){
            $(this).find(".dropdown").css({visibility: "hidden"});
        });

         $(".dropdown").mouseover(function(){
            $('.dropdown-link').css({visibility: "visible !important"});
         });

    //homepage header mouse event 
      $('.hw-home').mouseover(function(){
          $("header nav").addClass('hw-fixed-header');
      });

      $('.hw-home').mouseout(function(){
          $("header nav").removeClass('hw-fixed-header');
      });


        //fixed header
    $(document).scroll(function(){
      var main = $(this).scrollTop();
      if(main >= 51) {
        if(!$('header').hasClass('hw-home')) {
          $("header nav").addClass('hw-fixed-header');
          $("main").css("margin-top","70px");
        }
        
      }
      else {
        $("header nav").removeClass('hw-fixed-header');
        $("main").css("margin-top","0px");
      }


      if(main >= 70) {
        if(!$('header').hasClass('hw-home')) {
          $(".navbar-default.hw-fixed-header").css("padding-bottom","0px")
        }
      }

      else {
          $(".navbar-default").css("padding-bottom","5px")
      }

    });

    
      //tagcloud
      $('.tagcloud > li').click(function(){
        $('.tagcloud > li').removeClass('tagactive');
        $(this).addClass('tagactive');
      });
    
      //tagcloud
      $('.tagcloud > li').click(function(){
        $('.tagcloud > li').removeClass('tagactive');
        $(this).addClass('tagactive');
      });
  
  


      // it-services

        // testimonial-carousel
          $('.testimonial-carousel .carousel-indicators li').click(function(){
              $(this).parents('.testimonial-carousel').find('.carousel').carousel(parseInt(this.getAttribute('data-to')));
          });
        // End of testimonial-carousel

        // ui-ux tab
          $('.hw-ui-ux-carousel .carousel').carousel({
            interval: 1000,
              pause: true
          });
          $(window).load(function () {
              $('.hw-ui-ux-carousel .carousel').carousel("pause");
          });
          
          $('.play').click(function () {
              $(this).parents('.hw-view-project').siblings('.carousel').carousel('cycle');
          });
          $('.pause').click(function () {
              $(this).parents('.hw-view-project').siblings('.carousel').carousel('pause');
          });
        // End of ui-ux tab

      // End of it-services


      //equal height js

        equalheight = function(container){

        var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
         $(container).each(function() {

           $el = $(this);
           $($el).height('auto')
           topPostion = $el.position().top;

           if (currentRowStart != topPostion) {
             for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
             }
             rowDivs.length = 0; // empty the array
             currentRowStart = topPostion;
             currentTallest = $el.height();
             rowDivs.push($el);
           } else {
             rowDivs.push($el);
             currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
           for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
           }
         });
        }

        $(window).load(function() {
          equalheight('.blog-main .blog-content');
        });


        $(window).resize(function(){
          equalheight('.blog-main .blog-content');
        });
      // End of equal height js

       
       // upskilling 

      //filter
        $('.hw-upskilling-filter li').click(function(){
            $('.hw-upskilling-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");

            $('.upskill-cont-filter').each(function(){

              if($(this).hasClass(dataval)) {
                $(this).css({'display':'block'});
              }
              else {
                $(this).css({'display':'none'});
              }
              
            });

        });


      // End of upskilling

      // upskilling-casestudy collapse

        //arrow - toggle rotate
        $('#upskill-accordion .accordion-toggle').click(function(){
          $(this).next().toggleClass("arrow-rotate");
        });
      // End of upskilling-casestudy collapse


      // service details
        $('.filter').click(function(){
          var dtab = $(this).attr("data-tab");
          $('.filter').removeClass('active');
          $(this).addClass('active');

          $('.filter-content').each(function(){
              var dval = $(this).attr("data-value");

              if(dtab == dval) {
                $(this).addClass('active');
              }
              else {
                  $(this).removeClass('active');
              }
          });
        });
      // End of service detials

 // casestudy

      //filter
        $('.hw-casestudy-filter li').click(function(){
          
            $('.hw-casestudy-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");
           
            case_study_filter(dataval);

        });


var case_study_filter = function(dataval)
{
$('.casestudy-cont-filter').each(function(){
if($(this).hasClass(dataval)) {
  $(this).css({'display':'block'});
}
else {
  $(this).css({'display':'none'});
}
});
}

      // End of casestudy

      /* job board*/
      $('.hw-job1').click(function() {
        $(this).addClass('view-color');
         $(this).parent('tr').next().removeClass('hide');
     });

       $('.view1-close').click(function() {
         $(this).parents('tr').prev().find('.hw-job1').removeClass('view-color');
          
           $(this).parents('tr').addClass('hide');
       }); 
      
        $('.apply').click(function () {
           $('.view1').addClass('hide');
          $('.apply-div').addClass('show');
           
        });

        $('.form-close').click(function() {
          $('.apply-div').removeClass('show');
           $('.view-act').removeClass('view-color');
        }); 

    /* end of job board*/

$(window).on('load', function() {
  
  var cururl = window.location;
       var curid = cururl.hash.slice(1);
       $('.hw-casestudy-filter li').each(function(){
              var dval = $(this).attr("data-value");

              if(curid == dval) {
                $(this).addClass('active tagactive');
              }
              else {
                  $(this).removeClass('active tagactive');
              }
          });
       case_study_filter(curid);
});


/* end of tag cloud*/

/* header hover */
        var initiall = $('.navbar-right > li > a:first-child').position().left;
       $('.line-animation').css({left:initiall+'px'});

      $('.navbar-right > li > a').mouseover(function(){

       var w = $(this).width();    
       var l = $(this).position().left;
       l += 18;
       $('.line-animation').css({width:w+'px', left:l+'px'});
     });

     $('.navbar-right > li > a').mouseout(function(){
       $('.line-animation').css({width:'0px'});
     });

     //left 
     $('.navbar-left > li > a').mouseover(function(){

       var w_left = $(this).width();    
       var l_left = $(this).position().left;
       l_left += 18;
       $('.line-animation1').css({width:w_left+'px', left:l_left+'px'});
     });

     $('.navbar-left > li > a').mouseout(function(){
       $('.line-animation1').css({width:'0px'});
     });



/* end of header hover */  

  // talk to us
  $('.talk-to-us').bind('click', function(event) {
    var tabdetail = $(this).parents('.hw-started').offset().top;
          $('html, body').animate({
              scrollTop: tabdetail}, 1500, 'linear');
  }); 

  




});

