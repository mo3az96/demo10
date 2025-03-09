$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  // Menu
  $(".menu-btn").on("click", function () {
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
    $(".nav-overlay").fadeIn();
  });
  $(".close-btn").on("click", function () {
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
    $(".nav-overlay").fadeOut();
  });
  // Categories Trigger
  $(".nav_categories-toggle").on("click", function () {
    $(".nav_categories-list").slideToggle();
    if ($(window).width() > 767) {
      $(".nav-overlay").fadeToggle();
    } else {
      $(this).toggleClass("active");
    }
  });
  if ($(window).width() < 767) {
    $(".has-children>a").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
  }
  $(".nav-overlay").on("click", function () {
    $(this).fadeOut();
    if ($(window).width() > 767) {
      $(".nav_categories-list").slideUp();
    } else {
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    }
  });

  // Main Slider
  let mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });

  // Brands Slider
  let brandsSwiper = new Swiper(".brands-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: false,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 18,
      },
    },
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".brands-slider .swiper-button-next",
      prevEl: ".brands-slider .swiper-button-prev",
    },
  });

  // Bestseller Slider
  let bestsellerSwiper = new Swiper(".bestseller-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
    pagination: {
      el: ".bestseller-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".bestseller-slider .swiper-button-next",
      prevEl: ".bestseller-slider .swiper-button-prev",
    },
  });

  // Offers Slider
  let offersSwiper = new Swiper(".offers-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
    pagination: {
      el: ".offers-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".offers-slider .swiper-button-next",
      prevEl: ".offers-slider .swiper-button-prev",
    },
  });

  // Lattest Slider
  let lattestSwiper = new Swiper(".lattest-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 25,
      },
    },
    pagination: {
      el: ".lattest-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".lattest-slider .swiper-button-next",
      prevEl: ".lattest-slider .swiper-button-prev",
    },
  });

  // Footer
  if ($(window).width() <= 767) {
    $(".nav-foot-header").click(function () {
      $(".nav-foot-header").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-foot-header").not(this).siblings().slideUp(500);
    });
  }

  // Scroll To Top
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
