$(function ($) {
  $(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });



  $('.price-all').hide();
  $('.nutrition-all').hide();
  $('.viability-all').hide();
  $('.space2').css("height", "200px");

  $('.price').click(function () {
    $('.price-all').fadeIn();
    $('.space2').css("height", "80vh");
    $('.nutrition-all').hide();
    $('.viability-all').hide();
  });
  $('.nutrition').click(function () {
    $('.nutrition-all').fadeIn();
    $('.space2').css("height", "90vh");
    $('.price-all').hide();
    $('.viability-all').hide();
  });
  $('.viability').click(function () {
    $('.viability-all').fadeIn();
    $('.space2').css("height", "70vh");
    $('.price-all').hide();
    $('.nutrition-all').hide();
  });
  $('.back').click(function () {
    $('.price-all').fadeOut();
    $('.nutrition-all').fadeOut();
    $('.viability-all').fadeOut();
    $('.space2').css("height", "200px");
  });

  // $('.looking').hover(function () {
  //   $('.looking').css("transition", "0.5s");
  //   $('.looking').css("transform", "rotateZ(180deg)");
  // });

  // $('.bg-swicher').bgSwitcher({
  //   images: ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'],
  //   interval: 5000,
  //   loop: true
  // });

  // $(window).scroll(function () {
  //   var targetElement = $('.fadein').offset().top;
  //   var scroll = $(window).scrollTop();
  //   var windowHeight = $(window).height();
  //   if (scroll > targetElement - windowHeight + 200) {
  //     $('.fadein').css('opacity', '1');
  //     $('.fadein').css('transform', 'translateY(0)');
  //   }
  // });

  // $('.slider').slick({
  //   arrows: false,
  //   autoplay: true,
  //   dots: true,
  //   centerMode: true,
  //   centerPadding: '20%',
  // });

  // $('.more-button').on('click', function () {
  //   if ($('.open-box').is(':hidden')) {
  //     $('.open-box').slideDown();
  //     $(this).text('close');
  //     $(this).css('background-color', '#808080')
  //   } else {
  //     $('.open-box').slideUp();
  //     $(this).text('more');
  //     $(this).css('background-color', '#fabb51')
  //   }
  // });

  $(".reason-button").modaal();

  // $('nav a[href^="#"]').click(function () {
  //   var adjust = 0;
  //   var speed = 400;
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? 'html' : href);
  //   var position = target.offset().top - adjust;
  //   $('body,html'), animate({
  //     scrollTop: position
  //   }, speed, 'swing');
  //   return false;
  // });
});