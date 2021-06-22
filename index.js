"use strict";

const burgermenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".burger");
const closeburger = document.querySelector(".closeburger-button");
const body = document.body;

burger.addEventListener("click", () => {
    burgermenu.style.display = "flex";
    body.style.overflowY = "hidden";
});

closeburger.addEventListener("click", () => {
    burgermenu.style.display = "none";
    body.style.overflowY = "scroll";
});

const swiper3 = new Swiper(".Swiper3", {
    // centeredSlides: true,
    loop: true,
    // slideToClickedSlide: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
    },
    slidesPerView: "auto",
    // allowTouchMove: true,
    resizeReInit: true,
    // watchOverflow: true,
});
