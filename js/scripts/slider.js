var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  freeMode: false,
  slidesPerView: 1.1,

  loop: false,
  navigation: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
