(function ($) {
  $(function () {
    // Handle scroll transitions
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".announcement-bar").addClass("scrolled");
      } else {
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
