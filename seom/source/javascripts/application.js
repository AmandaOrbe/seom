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


  $('.btn-cancel, .lightbox').on('click', function(e){
      $(".lightbox").fadeOut(500);
      $('body').css("overflow", "initial");
      e.preventDefault();
      $( '.white-box' ).click(function( event ) {
      event.stopPropagation();
});
  });



  $("html").keydown(function(event){
    if (event.which === 27){
      $(".lightbox").fadeOut(500);
      $('body').css("overflow", "initial");
    };
  });

// especialistas

$('.section-container').on('click', function(){
      $(this).children().fadeIn(500);
 });
$('.curso-card').on('click', function(){
      $(this).animate({"margin-top": "-=5"}, 500).animate({"margin-top": "+=5"}, 500)
 });


  $('.caja').on('click', function(e) {
      $(this).not(".lista").toggleClass("expandido reducido", 600); //you can list several class names
      e.preventDefault();
      $( '.lista-cursos' ).click(function( event ) {
      event.stopPropagation();
});
    });


});


// show


