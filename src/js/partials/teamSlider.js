function teamSlider() {
  const teamSlider = new Swiper(".team-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
      prevEl: ".team-slider__button--prev",
      nextEl: ".team-slider__button--next",
    },
  });
}
