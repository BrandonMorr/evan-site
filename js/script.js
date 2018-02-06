$(document).ready(function() {
  /**
   * Panel sliding.
   */
  var btns = [$('#about-btn'), $('#media-btn'), $('#events-btn'), $('#contact-btn'), $('#player-btn')];

  for (var i = 0; i < btns.length; i++) {
    btns[i].click(
      // now we do ze sliding
      function() {
        // each button has a 'panel' attribute to correspond to a panel
        var panel = $(`${$(this).attr('panel')}`);

        // if player button use alternate animation
        if (panel.attr('id') == 'player') {
          // do the player animation
          if ($(panel).attr('clicked') == 1) {
            $(panel).animate({ bottom: '-10%' }, 250);
            $(panel).attr('clicked', 0);
          } else {
            $(panel).animate({ bottom: '0' }, 250);
            $(panel).attr('clicked', 1);
          }
        } else {
          // otherwise do the panel animation
          if ($(panel).attr('clicked') == 1) {
            $(panel).animate({ left: '-100%' }, 500);
            $(panel).attr('clicked', 0);
          } else {
            $(panel).animate({ left: '5%' }, 500);
            $(panel).attr('clicked', 1);
          }
        }
      }
    );
  }

  /**
   * Landing page.
   */
   $('.landing').click(function() {
     $(this).fadeOut('fast', function() {
       $(this).css({
         'z-index':'0',
         'display':'none'
       });
     })
   });
});
