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
  $( '.white-box' ).click(function( event ) {
      event.stopPropagation();
  });

  $('.btn-cancel, .lightbox').on('click', function(e){
      $("#form-lightbox").fadeOut(500);
      $('body').css("overflow", "initial");
      e.preventDefault();

  });



  $("html").keydown(function(event){
    if (event.which === 27){
      $("#form-lightbox").fadeOut(500);
      $('body').css("overflow", "initial");
    };
  });

// lightbox aviso legal


  $('#aviso-legal').on('click', function(){
      $('#lightbox-legal').fadeIn(500);
      $('body').css("overflow", "hidden");

  });

  $( '.condiciones' ).click(function( event ) {

        console.log(event)
      event.stopPropagation();
      });

  $("#lightbox-legal").click(function(e){
      console.log("soy e")
      $("#lightbox-legal").fadeOut(500);
      $('body').css("overflow", "initial");
      e.preventDefault();



  });








  $("html").keydown(function(event){
    if (event.which === 27){
      $("#lightbox-legal").fadeOut(500);
      $('body').css("overflow", "initial");
    };
  });


// lightbox requisitos minimos


  $('#requisitos-minimos').on('click', function(){
      $('#lightbox-requisitos').fadeIn(500);
      $('body').css("overflow", "hidden");

  });


  $("#lightbox-requisitos").not(".condiciones").on('click', function(e){
      $("#lightbox-requisitos").fadeOut(500);
      $('body').css("overflow", "initial");
      e.preventDefault();

  });



  $("html").keydown(function(event){
    if (event.which === 27){
      $("#lightbox-requisitos").fadeOut(500);
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


