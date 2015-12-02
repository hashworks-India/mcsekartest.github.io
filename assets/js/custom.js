$(document).ready(function(){



    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');

});

    $('#osb-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-cust ').carousel(parseInt(this.getAttribute('data-to')));
});
     $('#ms-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-cust ').carousel(parseInt(this.getAttribute('data-to')));
});
      $('#ad-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-cust ').carousel(parseInt(this.getAttribute('data-to')));
});
       $('#etl-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-cust ').carousel(parseInt(this.getAttribute('data-to')));
});
});

