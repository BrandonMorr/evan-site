$(document).ready(function() {
  $('#about-btn').click(function() {
    if ($('#about').attr('clicked') == 1) {
      $('#about').animate({ left: '-100%' }, 500);
      $('#about').attr('clicked', 0);
    } else {
      $('#about').animate({ left: '5%' }, 500);
      $('#about').attr('clicked', 1);
    }
  });

  $('#media-btn').click(function() {
    if ($('#media').attr('clicked') == 1) {
      $('#media').animate({ left: '-100%' }, 500);
      $('#media').attr('clicked', 0);
    } else {
      $('#media').animate({ left: '5%' }, 500);
      $('#media').attr('clicked', 1);
    }
  });

  $('#events-btn').click(function() {
    if ($('#events').attr('clicked') == 1) {
      $('#events').animate({ left: '-100%' }, 500);
      $('#events').attr('clicked', 0);
    } else {
      $('#events').animate({ left: '5%' }, 500);
      $('#events').attr('clicked', 1);
    }
  });
});
