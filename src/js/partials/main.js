window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.header-langs')) {
      document.querySelector('.header-langs').classList.remove('opened');
    }
  });

  header();

  if (document.querySelector('.news-slider')) {
    newsSlider();
  }

  if (document.querySelector('.team-slider')) {
    teamSlider();
  }
});
