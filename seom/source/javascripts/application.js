//= require jquery
//= require bootstrap
//= require_tree .

$(function() {

  $('.tabs a').on('click', function(){
      $('.tabs a.active').removeClass('active', 600);
      $(this).addClass('active', 600);

  });

  $('.btn-navbar').on('click', function(){
      $('.lightbox').fadeIn(500);
      $('body').css("overflow", "hidden");

  });
   $('.btn-cancel').on('click', function(){
      $('.lightbox').fadeOut(500);
      $('body').css("overflow", "initial");
  });
});

