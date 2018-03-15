//= require jquery
//= require bootstrap
//= require_tree .

$(function() {

  $('.tabs a').on('click', function(){
      $('.tabs a.active').removeClass('active', 400);
      $(this).addClass('active', 400);
  });
});

