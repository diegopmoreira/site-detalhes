"use strict"
$(document).ready(function () {
  $(window).scrollTop(0);
  $('.first-menu li').fadeOut(0);
  $('.navbar').fadeOut(0);
  



  setTimeout(() => {
    $('.second-title').fadeOut(275);
    $('.first-menu li').fadeIn(2500);
  }, 2500);


  $('.big-logo').click(function () {
    $('.first-page').slideUp(700);
    $('html, body').animate({ scrollTop: '0px' }, 300);
    $('.navbar').fadeIn(800);
    
  });

  $(window).on('scroll', function () {
    var navlink_off = $('.nav-link').offset();
    var pos_slide_off = $('.first-menu').offset();
    if (navlink_off.top > 100 && pos_slide_off.top == 0) {
      $(".nav-link").css("color", "white");

      $(".navbar").css("background-color", "transparent");
      $(".navbar img").attr("src", "src/img/logo-transp.png");
    } else {
      $(".nav-link").css("color", "#1f3646");
      $(".navbar").css("background-color", "#efd09a");
      $(".navbar img").attr("src", "src/img/logo-oficial.png");

    }
  });

  $(".proj-menu").click(function () {

    $('.first-page').slideUp(600, function () {
      $('.navbar').fadeIn(800);
      $('html, body').animate({ scrollTop: $(".projetos").offset().top }, 1000);
      
    });

  });

  $(".sobre-menu").click(function () {

    $('.first-page').slideUp(600, function () {
      $('.navbar').fadeIn(800);
      $('html, body').animate({ scrollTop: $(".sobre").offset().top }, 1000);
    
    });

  });
  $(".cont-menu").click(function () {

    $('.first-page').slideUp(600, function () {
      $('.navbar').fadeIn(800);
      $('html, body').animate({ scrollTop: $(".form-contato").offset().top }, 1000);
     
    });

  });




});

