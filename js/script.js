/* Scripts to do some cool stuff */

// Determine when to switch to fixed navbar
var navPosition = $(window).innerHeight() - 64;

$(document).ready(function() {

  /**
   * Component initialization.
   */
  $('.collapsible').collapsible();
  $('.parallax').parallax();

  /**
   * Smooth scrolling to anchor.
   */
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /**
   * Hero setup.
   */
  $('.parallax-container').css(
    { height: $(window).innerHeight() - 63 }
  );

  /**
   * Navbar functionality.
   */
  $(window).scroll(function () {
    if ($(window).scrollTop() > navPosition) {
      $(".navbar-fixed").show();
    }

    if ($(window).scrollTop() < (navPosition - 1)) {
      $(".navbar-fixed").hide();
    }
  });
});
