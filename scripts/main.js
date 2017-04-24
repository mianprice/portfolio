var changed = false;

$(window).load(() => {
  var x = $(document).width() > 750 ? 0 : 0;
  var h = $(document).height() - $('#contact').outerHeight() - $('#c-info').outerHeight() - $('#nav-blur').height();
  if ($(document).width() < 750) {
    h = h - $('#c-info').outerHeight();
  }
  h = h <= 100 ? 100 : h;
  $('.spacer').height(h);
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
  });
});
