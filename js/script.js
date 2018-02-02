$(document).ready(function() {
  $('#about-btn').click(function() {
    if ($('#about').attr('clicked') == 1) {
      $('#about').animate({ left: '-100%' }, 500);
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
  $('#contact-btn').click(function() {
    if ($('#contact').attr('clicked') == 1) {
      $('#contact').animate({ left: '-100%' }, 500);
      $('#contact').attr('clicked', 0);
    } else {
      $('#contact').animate({ left: '5%' }, 500);
      $('#contact').attr('clicked', 1);
    }
  });
  $('#player-btn').click(function() {
    if ($('#player').attr('clicked') == 1) {
      $('#player').animate({ bottom: '-10%' }, 250);
      $('#player').attr('clicked', 0);
    } else {
      $('#player').animate({ bottom: '0' }, 250);
      $('#player').attr('clicked', 1);
    }
  });
});
