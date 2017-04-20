var changed = false;

$(function() {
  var footer_height = $(window).height() - $('#contact').outerHeight() - $('#navbar').height() - $('#c-info').outerHeight();
  $('.spacer').height(footer_height);
  $("#nav").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 600,
    scrollThreshold: 0.5,
    end: function() {
      if (document.body.scrollTop === 0) {
        $('.current').toggleClass('.current');
      }
    }
  });
  $("#back-top").on('click', (e) => {
    e.preventDefault();
    $(".nav-title").trigger('click');
  })
});
