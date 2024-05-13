$(function() {
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});

$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});