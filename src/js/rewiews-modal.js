(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-review-open]"),
    closeModalBtn: document.querySelector("[data-modal-review-close-btn]"),
    closeModalBtn: document.querySelector("[data-modal-review-close-submit]"),
    modal: document.querySelector("[data-modal-rewiews]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();