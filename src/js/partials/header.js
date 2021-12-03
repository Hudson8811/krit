function header() {
  const header = document.querySelector('.header');

  header.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.closest('.header-langs')) {
      document.querySelector('.header-langs').classList.toggle('opened');
    }

    if (e.target.classList.contains('header-burger')) {
      header.querySelector('.header-menu').classList.toggle('active');
      header.querySelector('.header-burger').classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    }
  });
}
