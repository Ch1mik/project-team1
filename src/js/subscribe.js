(() => {
  const mobileMenu = document.querySelector('.sbc-menu-container');
  const openMenuBtn = document.querySelector('.sbc-open-menu');
  const closeMenuBtn = document.querySelectorAll('.sbc-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('sbc-is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.forEach(closeMenuBtn => closeMenuBtn.addEventListener('click', toggleMenu));  
})();