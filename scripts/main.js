var changed = false;

$(function() {
  $(window).on("scroll", $.debounce(10, true, function() {
    if (!changed) {
      $("#navbar").css({
        "background-color":"rgba(255,255,255,0.3)",
        "color":"black",
      });
      $(".nav-title").css({
        "opacity":"100"
      });
      $("#nav li a").css({
        "color":"black"
      });
      changed = true;
    }
  }));
  $(window).on("scroll", $.debounce(10, function() {
    if ($(window).scrollTop() === 0) {
      $("#navbar").css({
        "background-color":"",
        "color":"",
        "opacity":""
      });
      $(".nav-title").css({
        "opacity":""
      });
      $("#nav li a").css({
        "color":""
      });
      changed = false;
    }
  }));
});
