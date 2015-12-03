$(document).ready(function(){



    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');

});
// js for carousel platform integeration
    $('#osb-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-osb').carousel(parseInt(this.getAttribute('data-to')));
});
     $('#ms-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ms ').carousel(parseInt(this.getAttribute('data-to')));
});
      $('#ad-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ad ').carousel(parseInt(this.getAttribute('data-to')));
});
       $('#etl-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-etl ').carousel(parseInt(this.getAttribute('data-to')));
});
// js for carousel engineering practices
        $('#ep1-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ep1').carousel(parseInt(this.getAttribute('data-to')));
});
     $('#ep2-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ep2 ').carousel(parseInt(this.getAttribute('data-to')));
});
      $('#ep3-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ep3 ').carousel(parseInt(this.getAttribute('data-to')));
});
       $('#ep4-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-ep4 ').carousel(parseInt(this.getAttribute('data-to')));
});
// js for carousel mobility/bigdata
        $('#mb1-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-mb1').carousel(parseInt(this.getAttribute('data-to')));
});
     $('#mb2-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-mb2 ').carousel(parseInt(this.getAttribute('data-to')));
});
      $('#mb3-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-mb3 ').carousel(parseInt(this.getAttribute('data-to')));
});
       $('#mb4-testimonial-first .carousel-indicators li').on('click', function() {
  $('.carousel-mb4 ').carousel(parseInt(this.getAttribute('data-to')));
});





});

