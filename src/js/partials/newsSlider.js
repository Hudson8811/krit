function newsSlider() {
  const newsSlider = new Swiper(".news-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
    },
    navigation: {
      prevEl: ".news-slider__button--prev",
      nextEl: ".news-slider__button--next",
    },
    breakpoints: {
      561: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        autoplay: false,
      },
      1079: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
  });
}
