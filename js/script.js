/* Scripts to do some cool stuff */

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
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 825) {
      $(".navbar-fixed").show();
    }

    if ($(window).scrollTop() < 824) {
      $(".navbar-fixed").hide();
    }
  });
});
