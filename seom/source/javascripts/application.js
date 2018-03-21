//= require jquery
//= require bootstrap
//= require_tree .

$(function() {

  // tabs

  $('.tabs a').on('click', function(){
      $('.tabs a.active').removeClass('active', 600);
      $(this).addClass('active', 600);

  });

  // lightbox for the form

  $('.btn-navbar').on('click', function(){
      $('.lightbox').fadeIn(500);
      $('body').css("overflow", "hidden");

  });
   $('.btn-cancel').on('click', function(){
      $('.lightbox').fadeOut(500);
      $('body').css("overflow", "initial");
  });


// especialistas

$('.section-container').on('click', function(){
      $(this).children().fadeIn(500);
 });
$('.curso-card').on('click', function(){
      $(this).css("margin-top", "-=5");
 });


// $('.reducido').on('click', function(){
//       $(this).removeClass('reducido').addClass('expandido', 600);

//  });

// $('.expandido').on('click', function(){
//        console.log("sheriferino");
//  });

  $('.caja').on('click', function(e) {
      $(this).toggleClass("expandido reducido", 600); //you can list several class names
      e.preventDefault();
    });


});


// show


