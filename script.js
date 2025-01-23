if (window.screen.width <= 800) {
  $("#navbar-toggle").addClass("inactive");
  $("nav ul").addClass("hidden");
}

(function ($) {
  $(function () {
    // Update dropdown toggle
    $("nav ul li a:not(:only-child)").click(function (e) {
      e.preventDefault();
      const dropdown = $(this).siblings(".navbar-dropdown");

      // Close other dropdowns
      $(".navbar-dropdown").not(dropdown).removeClass("show");

      // Toggle current dropdown
      dropdown.toggleClass("show");
    });

    // Close dropdowns when clicking outside
    $(document).click(function (e) {
      if (!$("nav").is(e.target) && !$("nav").has(e.target).length) {
        $(".navbar-dropdown").removeClass("show");
      }
    });

    // Mobile menu toggle
    $("#navbar-toggle").click(function () {
      $("nav ul").toggleClass("show");
      $(this).toggleClass("active");
    });

    // Handle scroll transitions
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".navigation").addClass("scrolled");
        $(".announcement-bar").addClass("scrolled");
      } else {
        $(".navigation").removeClass("scrolled");
        $(".announcement-bar").removeClass("scrolled");
      }
    });

    // Initialize hero section
    setTimeout(() => {
      $(".hero-section").addClass("loaded");
    }, 100);

    // Clone announcement items for smooth infinite scroll
    const wrapper = $(".announcement-wrapper");
    const itemsWidth = wrapper.width();
    const items = wrapper.html();

    wrapper.append(items);

    // Adjust animation duration based on content width
    const duration = (itemsWidth / 50) * 1000; // 50 pixels per second
    wrapper.css("animation-duration", `${duration}ms`);

    // Pause animation on hover
    wrapper.hover(
      function () {
        $(this).css("animation-play-state", "paused");
      },
      function () {
        $(this).css("animation-play-state", "running");
      }
    );
  });
})(jQuery);

// Update resize handler
$(window).resize(function () {
  if ($(window).width() > 800) {
    $("nav ul").removeClass("show").removeAttr("style");
    $("#navbar-toggle").removeClass("active");
    $(".navbar-dropdown").removeClass("show");
  }
});
