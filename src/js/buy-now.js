(() => {
  const mobileMenu = document.querySelector('.v-menu-container');
  const openMenuBtn = document.querySelector('.v-open-menu');
  const closeMenuBtn = document.querySelector('.v-close-menu');
const linksMobileMenu = document.querySelectorAll('.v-mobile-link-close');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  linksMobileMenu.forEach(linksMobileMenu => linksMobileMenu.addEventListener('click', toggleMenu));
})();



// modal

var swiper = new Swiper('.swiperProduct-modal', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-paginat',
    clickable: true,
  },
});
