$(document).ready(function () {
  //click hide and show
  $(".btn-2").hide();

  //Find a way to put these together
  $(".btn-1").click(function () {
    $(this).hide();
    $(".btn-2").show();
  });

  $(".btn-2").click(function () {
    $(this).hide();
    $(".btn-1").show();
  });

  // Toggle
  $(".click-toggle").click(function () {
    $(".toggle-me").toggle();
  });

  //slideUp, slideDown, slideToggle
  $(".click-to-slideUp").click(function () {
    $(".slide").slideUp(300);
  });
  $(".click-to-slideDown").click(function () {
    $(".slide").slideDown(300);
  });

  $(".click-to-toggle").click(function () {
    $(".slide").slideToggle(300);
  });

  // .fadeIn and .fadeOut
  $(".click-to-fadeIn").click(function () {
    $(".fade").fadeIn(1000);
  });
  $(".click-to-fadeOut").click(function () {
    $(".fade").fadeOut(1000);
  });

  //  add class
  $(".click-to-addClass").click(function () {
    $(".make-it-blue").addClass("blue");
  });

  // .before & append
  $("li").click(function () {
    $(this).before("<li>Before!</li>");
  });

  // .after
  $("p").click(function () {
    $(this).after("<p>After!</p>");
  });
  // .append
  $("h1").click(function () {
    $(this).append(" Appended!");
  });

  // .html
  $("h1").click(function () {
    $(this).html("<button>H1 Button</button>");
  });

  // .attr
  $("#submit").click(function () {
    console.log($("#email").attr("placeholder"));
  });

  // .val
  $("#submit").click(function () {
    console.log($("#email").val());
  });

  // .text
  $("p").click(function () {
    $(this).text("New Text");
  });
});
