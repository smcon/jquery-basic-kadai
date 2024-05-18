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
  //スクロールをなめらかにする
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });
});