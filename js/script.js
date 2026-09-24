$(function () {
  //アコーディオン開閉＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  $('.faq__toggle-title').click(function () {
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
  });

  //ページ内スクロール＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});