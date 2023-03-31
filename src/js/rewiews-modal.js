(() => {
  const mobileMenu = document.querySelector('.review-menu-container');
  const openMenuBtn = document.querySelector('.review-open-menu');
  const closeMenuBtn = document.querySelector('.review-close-menu');
const linksMobileMenu = document.querySelectorAll('.review-mobile-link-close');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('review-is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  linksMobileMenu.forEach(linksMobileMenu => linksMobileMenu.addEventListener('click', toggleMenu));
})();