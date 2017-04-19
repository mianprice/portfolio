var changed = false;

$(function() {
  var footer_height = $(window).height() - $('#contact').height() - $('#navbar').height() - ($('#c-info').height() + parseInt($('#c-info').css('padding-bottom').replace('px','')) + parseInt($('#c-info').css('padding-top').replace('px','')));
  $('#post-contact').height(footer_height);
  $("#nav").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 600,
    scrollThreshold: 0.5,
  });
});
