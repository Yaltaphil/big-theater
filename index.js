"use strict";

const burgermenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".burger");
const closeburger = document.querySelector(".closeburger-button");
const body = document.body;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

burger.addEventListener("click", () => {
    burgermenu.style.display = "flex";
    body.style.overflowY = "hidden";
});

closeburger.addEventListener("click", () => {
    burgermenu.style.display = "none";
    body.style.overflowY = "scroll";
});

const swiper1 = new Swiper(".Swiper1", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    autoplay: {
        delay: 3500,
    },
    speed: 500,
    effect: "cube",
});
prev.addEventListener("click", () => {
    swiper1.slidePrev();
});
next.addEventListener("click", () => {
    swiper1.slideNext();
});

const swiper2 = new Swiper(".Swiper2", {
    slidesPerView: "auto",
    loop: true,
    // loopedSlides: 4,
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1.55,
    // freeModeMomentumVelocityRatio: 1,
    freeModeMomentumBounce: false,
    // freeModeMinimumVelocity: 0.5,
    // breakpoints: {
    //     576: {
    //         slidesPerView: 3,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //     },
    //     992: {
    //         slidesPerView: 5,
    //     },
    // },
    // centeredSlides: true,
    // allowTouchMove: true,
    // resizeReInit: true,
    // watchOverflow: true,
});

const swiper3 = new Swiper(".Swiper3", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 60,
    grabCursor: true,
    allowTouchMove: true,
    loopedSlides: 4,
});
