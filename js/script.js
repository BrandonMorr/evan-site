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
        // before we slide anything, reset the panels
        if (panel.attr('id') != 'player') {
          $('.panel').each(
            function() {
              $(this).animate({ left: '-100%' }, 500);

              if (panel.attr('id') != $(this).attr('id')) {
                $(this).attr('clicked', 0);
              }
            }
          );
        }
        // if player button use alternate animation
        if (panel.attr('id') == 'player') {
          // adjust height if player is open
          if (panel.attr('clicked') == 1) {
            $('.panel').each(
              function() {
                if (panel.attr('id') != $(this).attr('id')) {
                  $(this).animate({ height: '100%' }, 250);
                }
              }
            );
            panel.animate({ bottom: '-10%' }, 250);
            panel.attr('clicked', 0);
          } else {
            // adjust height if player is open
            $('.panel').each(
              function() {
                if (panel.attr('id') != $(this).attr('id')) {
                  $(this).animate({ height: '90%' }, 250);
                }
              }
            );
            panel.animate({ bottom: '0' }, 250);
            panel.attr('clicked', 1);
          }
        } else {
          if (panel.attr('clicked') == 1) {
            panel.animate({ left: '-100%' }, 500);
            panel.attr('clicked', 0);
          } else {
            panel.animate({ left: '5%' }, 500);
            panel.attr('clicked', 1);
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
