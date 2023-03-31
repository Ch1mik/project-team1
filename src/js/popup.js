(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-popup]"),
    closeModalBtn: document.querySelector("[data-modal-close-popup]"),
    modal: document.querySelector("[data-modal-popup]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-p");
  }
})();