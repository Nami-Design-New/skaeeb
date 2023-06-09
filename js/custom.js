$(document).ready(function () {
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
  });
  //partnersSlider Slider
  var partnersSlider = new Swiper(".partnersSlider", {
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".projectSlider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".projectSlider2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".projectSliderNext",
      prevEl: ".projectSliderPrev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  //ourInvestorsSlider
  var ourInvestorsSlider = new Swiper(".ourInvestorsSlider", {
    spaceBetween: 12,
    speed: 1000,
    scrollbar: {
      el: ".swiper-scrollbar",
      // dragSize: 70,
      draggable: true,
      hide: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
     
    },
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".preloader").delay(1000).fadeOut(300);
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    // easing: "linear",
    once: true,
  });
  // lozad
  const observer = lozad(".lazy", {
    loaded: function (el) {
      el.parentNode.classList.add("loaded");
    },
  });
  observer.observe();
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)",
  });
  // tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  // counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});
