"use strict"
$(document).ready(function () {
  var move_nav = function () {
    if ($(window).scrollTop() > 100) {
      $(".bg-navbar").fadeOut("slow");



    } else {
      $(".bg-navbar").fadeIn("slow");
    }
  };


  $('.first-menu li').fadeOut(0);
  

  setTimeout(() => {
    $('.second-title').fadeOut(275);
    $('.first-menu li').fadeIn(2500);
  }, 2500);

 
    $(window).one('scroll',function () {
      
      
        
        $('.first-page').slideUp(700);
        $('html, body').animate({scrollTop: '0px'}, 300);
     
   

    });
   
    
  
  



});
