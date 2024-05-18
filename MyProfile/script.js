$(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });
  //マウスを当てると半透明になる、、できない
  $('a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#page-top').fadeIn();
      } else {
        $('#page-top').fadeOut();
      }
   });
 });

 // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
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

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });


});