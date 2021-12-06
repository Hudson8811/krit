function teamSlider() {
  const teamSlider = new Swiper(".team-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
    },
    navigation: {
      prevEl: ".team-slider__button--prev",
      nextEl: ".team-slider__button--next",
    },
    breakpoints: {
      421: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        autoplay: false,
      },
      1079: {
        spaceBetween: 30,
        slidesPerView: 4,
        autoplay: false,
      },
    },
  });
}
