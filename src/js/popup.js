(() => {
  const refs = {
<<<<<<< Updated upstream
    openModalBtn: document.querySelector("[data-modal-open-popup]"),
    closeModalBtn: document.querySelector("[data-modal-close-popup]"),
    modal: document.querySelector("[data-modal-popup]"),
=======
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
>>>>>>> Stashed changes
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
<<<<<<< Updated upstream
    refs.modal.classList.toggle("is-hidden-p");
=======
    refs.modal.classList.toggle("is-hidden");
>>>>>>> Stashed changes
  }
})();