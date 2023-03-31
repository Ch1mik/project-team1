(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-sbscrb_modal-open]"),
    closeModalBtn: document.querySelector("[data-sbscrb_modalclose]"),
    sbscrb_modal: document.querySelector("[data-sbscrb_modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.sbscrb_modal.classList.toggle("is-hidden");
  }
})();