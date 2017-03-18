var changed = false;

$(function() {
  $("#nav").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 600,
    scrollThreshold: 0.5,
    // easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
  });

  // $(window).on("scroll", $.debounce(10, true, function() {
  //   if (!changed) {
  //       // $("#navbar").css({
  //       //   "background-color":"rgba(255,255,255,0.7)",
  //       //   "color":"black",
  //       // });
  //     // $(".nav-title").css({
  //     //   "opacity":"100"
  //     // });
  //     // $("#nav li a").css({
  //     //   "color":"black"
  //     // });
  //     changed = true;
  //   }
  // }));
  // $(window).on("scroll", $.debounce(10, function() {
  //   if ($(window).scrollTop() === 0) {
  //     $("#navbar").css({
  //       "background-color":"",
  //       "color":"",
  //       "opacity":""
  //     });
  //     $(".nav-title").css({
  //       "opacity":""
  //     });
  //     $("#nav li a").css({
  //       "color":""
  //     });
  //     changed = false;
  //   }
  // }));
});
