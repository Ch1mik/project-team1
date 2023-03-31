(() => {
  const mobileMenu = document.querySelector('.v-menu-container');
  const openMenuBtn = document.querySelectorAll('.v-open-menu');
  const closeMenuBtn = document.querySelectorAll('.v-close-menu');
const linksMobileMenu = document.querySelectorAll('.v-mobile-link-close');
 
  closeMenuBtn.forEach(closeMenuBtn => closeMenuBtn.addEventListener('click', () => {
    const isMenuOpen =
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }));
  openMenuBtn.forEach(openMenuBtn => openMenuBtn.addEventListener('click', () => {
    const isMenuOpen =
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }));

  linksMobileMenu.forEach(linksMobileMenu => linksMobileMenu.addEventListener('click', () => {
    const isMenuOpen =
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }));
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
