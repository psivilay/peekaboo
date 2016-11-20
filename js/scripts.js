$(document).ready(function() {
  $(".clickable").click(function() {
    $("#showing").toggle();
    $("#hidden").toggle();
  });

  $(".fade-clickable").click(function() {
    $(".fading-out").fadeToggle();
    $(".fading-in").fadeToggle();
  });

});
