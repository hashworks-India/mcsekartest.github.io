$(document).ready(function(){



    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');

});
// js for carousel platform integeration
  
  


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





});

