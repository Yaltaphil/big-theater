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
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
    // centeredSlides: true,
    // allowTouchMove: true,
    // resizeReInit: true,
    // watchOverflow: true,
});
