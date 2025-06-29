/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/swiper-slider-pro/view.js ***!
  \***************************************/
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".my-swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map