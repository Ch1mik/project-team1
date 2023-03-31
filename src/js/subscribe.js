// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-sbscrb_modal-open]"),
//     closeModalBtn: document.querySelector("[data-sbscrb_modalclose]"),
//     sbscrb_modal: document.querySelector("[data-sbscrb_modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.sbscrb_modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const mobileMenu = document.querySelector('.sbc-menu-container');
  const openMenuBtn = document.querySelector('.sbc-open-menu');
  const closeMenuBtn = document.querySelector('.sbc-close-menu');
  const linksMobileMenu = document.querySelectorAll('.sbc-btn-close-menu');
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
  closeMenuBtn.addEventListener('click', toggleMenu);
  linksMobileMenu.forEach(linksMobileMenu => linksMobileMenu.addEventListener('click', toggleMenu));
  
})();