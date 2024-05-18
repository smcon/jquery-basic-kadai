$(function() {
  $('#nav').slick( {
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });

  $('#left-box').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView) {
    $(this).stop().addClass('slide-left');
  }
  });

});