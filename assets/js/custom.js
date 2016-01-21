$(document).ready(function(){

    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');

    });


    /* smooth scroll*/
      $('.carousel').carousel();
    /* End of smooth scroll*/
  
    //homepage dropdown
      $(".dropdown-link .dropdown").css({display: "none"});
        $(".dropdown-link").mouseenter(function(){
          $(this).find(".dropdown").css({visibility: "visible",display: "none"}).show(268);;
        });

        $(".dropdown-link").mouseleave(function(){
            $(this).find(".dropdown").css({visibility: "hidden"});
        });

        $(".dropdown").mouseenter(function(){
            $('.dropdown-link').css({visibility: "visible !important"});
        });

    //homepage header mouse event 

        $('.hw-home').mouseover(function(){
            $("header nav").addClass('hw-fixed-header');
        });

        $('.hw-home').mouseout(function(){
            $("header nav").removeClass('hw-fixed-header');
        });

    //homepage hover mouse event

        $('.navbar-default').mouseover(function(){
            $("header nav").addClass('hw-hover-header');
        });

        $('.navbar-default').mouseout(function(){
            $("header nav").removeClass('hw-hover-header');
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
          $(this).children().children().children().next().children().children().toggleClass("arrow-rotate");
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


      var case_study_filter = function(dataval) {
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
          var job_title = $(this).parents('.view1').prev().find("td").first().text(); // for setting the job-title value to form
          $(".input_subject").val(job_title);
          $('.view1').addClass('hide');
          $('.apply-div').addClass('show');
           
        });

        $('.form-close').click(function() {

          $('.apply-div').removeClass('show');
           $('.view-act').removeClass('view-color');
           $('.hw-job1').removeClass('view-color');
        }); 

    /* end of job board*/

    $(window).on('load', function() {
      
        var cururl = window.location;
         var curid = cururl.hash.slice(1);
         $('.hw-casestudy-filter > li').each(function(){
                var dval = $(this).attr("data-value");

                if(curid == dval) {
                  $(this).addClass('active tagactive');
                }
                else {
                    $(this).removeClass('active tagactive');
                }
          });
         
         tabchange(curid);
         case_study_filter(curid);
    });

    //url change event
    $(window).on('hashchange', function(e){
        var cururl = window.location;
        var curid = cururl.hash.slice(1);
        tabchange(curid);
    });

    //onclick header menu, add active class to the respective tab and tab-content
    var tabchange = function(curid){
      if($('.nav-tabs').hasClass('hw-tablink')) {

              $('.hw-tablink > li').each(function(){
                var dtabval = $(this).attr('data-value');
                if( dtabval !== '') {
                  if(curid == dtabval) {
                    $('.hw-tablink > li').removeClass('active');
                      $(this).addClass('active');
                  }
                }
                
              });

              $('.hw-tabcont-link > div').each(function(){
                var tabcont = $(this).attr('data-value');
                if(curid == tabcont) {
                  $('.hw-tabcont-link > div').removeClass('active in');
                      $(this).addClass('active in');
                  }

                if(curid == "Mobility") {
                       var item_width = $('#carousel_ul > li').width() + 20;
                      //make the sliding effect using jquery's anumate function '
                      $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
                      // $(this).css({'cursor':'default','color':'#ccc'});
                      $('#right_scroll i').css({'cursor':'default','color':'#ccc'});
                       $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
                  }

              });
          }
    }

    $('.nav-tabs > li a').click(function(){
        var navtab = $(this).parents('.nav-tabs').offset().top - 50;
          $('html, body').animate({
            scrollTop: navtab}, 1500, 'linear');
    });

    $(".nav-tabs a").click(function(){
        $(this).tab('show');
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


      //solution custom tab carousel
        $('#left_scroll i').css({'cursor':'default','color':'#ccc'});
        
        //when user clicks the right arrow for sliding right        
        $('#right_scroll i').click(function(){
          var item_width = $('#carousel_ul > li').width() + 20;
          $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
          $(this).css({'cursor':'default','color':'#ccc'});
          $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
        });

        $('.last_dropdown').click(function(){
             var item_width = $('#carousel_ul > li').width() + 20;
            //make the sliding effect using jquery's anumate function '
            $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
            // $(this).css({'cursor':'default','color':'#ccc'});
            $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
        });
        
        //when user clicks the left arrow for sliding left
        $('#left_scroll i').click(function(){
            var item_width = $('#carousel_ul > li').width();
            $('#carousel_ul').animate({'left' : '0px'},500);
            $(this).css({'cursor':'default','color':'#ccc'});
            $('#right_scroll i').css({'cursor':'pointer','color':'#040404'});
          });

         $('.first_dropdown').click(function(){
            var item_width = $('#carousel_ul > li').width();
            $('#carousel_ul').animate({'left' : '0px'},500);
            $('#left_scroll i').css({'cursor':'default','color':'#ccc'});
            $('#right_scroll i').css({'cursor':'pointer','color':'#040404'});
          });
    // End of solution custom tab carousel

     

     
     //casestudy toggle and collapse functionality
     $('.case-studies-control-grid > li').click(function(e){
        e.preventDefault();
        var target=$(this).attr('data-tab');
         if($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.case-studies-control-holder > div[data-tab="'+target+'"]').stop(1,1).slideUp();
          }
          else {
              $(".case-studies-control-grid > li.active").removeClass('active');
              $(this).addClass('active');
              $('.case-studies-control-holder > div').stop(1,1).slideUp();
              $('.case-studies-control-holder > div[data-tab="'+target+'"]').stop(1,1).slideDown();
          }
      });
      

    /* job board pagination */
      // $('.next_page').click(function(){
      //   var next = $('.pag.active').removeClass('active').next('.pag');
      //   var jobtab = $('.job-table.active').removeClass('active').next('.job-table');

      //   if( next.length == '0' )  {
      //     $('.prev_page').next('.pag').addClass('active');
      //     $('.table-wrapper > .job-table:first-child').addClass('active');
      //   }
      //     next.addClass('active');
      //     jobtab.addClass('active');
      // });

      // $('.prev_page').click(function(){
      //   var prev = $('.pag.active').removeClass('active').prev('.pag');
      //   var jobtabprev  = $('.job-table.active').removeClass('active').prev('.job-table');

      //   if( prev.length == '0' )  {
      //     $('.next_page').prev('.pag').addClass('active');
      //     $('.table-wrapper > .job-table:last-child').addClass('active');
      //   }
      //     prev.addClass('active');
      //     jobtabprev.addClass('active');
      // });
    /* end of job board */
    
    /* for color of service color */
          $('div.service-tabs-color1').css("background-color","#EC297B");
          $('div.service-tabs-color1').css("border","3px solid rgb(241, 158, 193)");
          $('.service-iconss').click(function(){
          $('div.service-tabs-color').css("background-color","#0AB4C5"); 
          $('div.service-tabs-color').css("border","1px solid #0AB4C5"); 
          $('div.service-tabs-color1').css("background-color","#0AB4C5");
          $('div.service-tabs-color1').css("border","1px solid #0AB4C5");
          if($('div.service-iconss.active'))
          {
            $('div.service-iconss.active').css("background-color","#EC297B");
            $('div.service-iconss.active').css("border","3px solid rgb(241, 158, 193)");
          }
          });
    /*  end color of service color */


/* for searching the job and location */


function jobPostSplitter(){
  $('table.job-table').each(function() {
    $('.job-table').next(".pager").remove();
    var currentPage = 0;
    var numPerPage = 5;
    var $table = $(this);
    $table.bind('repaginate', function() {
        $table.find('tbody .shown-item').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
    });
    $table.trigger('repaginate');
    var numRows = $table.find('tbody .shown-item').length;
    var numPages = Math.ceil(numRows / numPerPage);
    var $pager = $('<div class="pager"></div>');
    if(numPages>1)
    {
    for (var page = 0; page < numPages; page++) {
        $('<span class="page-number"></span>').text(page + 1).bind('click', {
            newPage: page
        }, function(event) {
            currentPage = event.data['newPage'];
            $table.trigger('repaginate');
            $(this).addClass('active').siblings().removeClass('active');
        }).appendTo($pager).addClass('clickable');
    }
     $pager.insertAfter($table).find('span.page-number:first').addClass('active');
   }
   if(numRows==0)
   {
    $pager = $('<div class="pager"><p>sorry, we dont have any job opening for this job title/location</p></div>');
    $pager.insertAfter($table);
   }
});
}




function jobSearchFunction(){
   var keyword_job = $(".serch-the-job").parent().prev().prev().children().val() + " ";
   var location_job = $(".serch-the-job").parent().prev().children().val() + " ";

   var job_title,job_location;
   keyword_job = keyword_job.trim().toLowerCase();
   location_job = location_job.trim().toLowerCase();

if(keyword_job=="" && location_job=="")  //for empty search
    {
      $('.job-list-item').each(function(){
        $(this).show();
        $(this).addClass('shown-item');
      });
    }
 else if(keyword_job=="")  // for only job location
     {
       $('.job-list-item').each(function(){
         job_location = $(this).find("td:nth-child(2)").text();
         job_location = job_location.trim().toLowerCase();
         if(job_location.search(location_job)  > -1 )
           {
            $(this).show();
            $(this).addClass('shown-item');
           }
           else{
            $(this).hide();
            $(this).removeClass('shown-item');
           } 
       });      }
 else if(location_job=="")   //for only job title
  {
     $('.job-list-item').each(function(){
      job_title = $(this).children().first().text();
      job_title = job_title.trim().toLowerCase();
      if(job_title.search(keyword_job)  > -1 )
        {
          $(this).show();
          $(this).addClass('shown-item');

        }
        else{
          $(this).hide();
          $(this).removeClass('shown-item');
        } 
    });
  }
else      //for both job tiltle and location
    {
      $('.job-list-item').each(function(){
        job_title = $(this).children().first().text();
        job_title = job_title.trim().toLowerCase();

         job_location = $(this).find("td:nth-child(2)").text();
         job_location = job_location.trim().toLowerCase();

          if(job_title.search(keyword_job) > -1 && job_location.search(location_job) > -1)
            {
              $(this).show();
               $(this).addClass('shown-item');
            }
            else{
              $(this).hide();
              $(this).removeClass('shown-item');
            } 
         });
      }
      }



jobSearchFunction();    
jobPostSplitter();          
  /*   upon clicking search button  */
    $(".serch-the-job").click( function() {
      jobSearchFunction();
      jobPostSplitter();
     });

  /*   upon enter button  */

    $('#job-title').keydown(function(e) {
      if (e.keyCode == 13) {
       jobSearchFunction();
       jobPostSplitter()
       }
      });

    $('#job-location').keydown(function(e) {
      if (e.keyCode == 13) {
       jobSearchFunction();
       jobPostSplitter();
       }
      });

/* end for searching the job and location */

/* for google search engine */

          (function() {
            var cx = '012091172359027849241:ukd4iabk1_g';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                '//cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
/* end for google search engine */

});

