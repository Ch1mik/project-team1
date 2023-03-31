// MOdal
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
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
