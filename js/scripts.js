$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").toggle();
    $("#hidden").toggle();
  });

  $(".fade-clickable").click(function() {
    $(".fading-out").fadeToggle();
    $(".fading-in").fadeToggle();
  });

  $(".slide-clickable").click(function() {
    $(".slide-out").slideToggle();
    $(".slide-in").slideToggle();
  });

});
