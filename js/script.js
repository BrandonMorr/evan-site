/* Scripts to do some cool stuff */

$(document).ready(function() {
  // smooth scrolling.
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

  // hover effect
  $(".navbar-item").hover(
    function() {
      $(this).css({ borderBottomWidth: "3px"});
  }, function() {
    $(this).css({ borderBottomWidth: "0px"});
  });

  // navbar functionality
  $(window).scroll(function () {
    if ($(window).scrollTop() > 900) {
      $(".navbar").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() < 899) {
      $(".navbar").removeClass("navbar-fixed");
    }
  });
});
