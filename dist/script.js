const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
});

const spotlightImage = document.querySelector('#spotlight-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const nextImage = thumbnail.dataset.image;
    if (!spotlightImage || !nextImage) return;

    spotlightImage.src = nextImage;
    thumbnails.forEach((item) => {
      const isSelected = item === thumbnail;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
