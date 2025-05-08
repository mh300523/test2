(function ($) {
  $(document).ready(function () {
    ///////// **mobile size** /////////
    $(".menu-bar").click(function () {
      $(this).toggleClass("nav_btn");
      $(".main-nav").toggleClass("open-nav");
      $("body").toggleClass("active-sidenav");
    });

    $(".dropdown-item").on("click", ".dropdown-click", function (e) {
      e.preventDefault();
      $(this).next(".dropdown-list").slideToggle(300);
    });

    ///////// **main Slider** /////////
    var mainSlider = new Swiper(".main-slider .swiper", {
      loop: true,
      autoplay: true,
      slidesPerView: 1,
      preloadImages: false,
      updateOnWindowResize: true,
      speed: 2000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  });
})(jQuery);
