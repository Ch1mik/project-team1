var swiper = new Swiper('.swiperReviews', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= 320px
    1200: {
      //   slidesPerView: 2,
      spaceBetween: 28,
    },
  },
  pagination: {
    el: '.swiper-pagin',
    clickable: true,
  },
});
