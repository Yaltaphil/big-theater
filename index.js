"use strict";

const burgermenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".burger");
const closeburger = document.querySelector(".closeburger-button");
const body = document.body;

burger.addEventListener("click", () => {
    burgermenu.classList.remove("hide");
    burgermenu.classList.add("show");
    body.style.overflowY = "hidden";
});

closeburger.addEventListener("click", () => {
    burgermenu.classList.remove("show");
    burgermenu.classList.add("hide");
    body.style.overflowY = "scroll";
});

// const swiper1 = new Swiper(".mySwiper1", {
//     loop: true,
//     autoplay: {
//         delay: 3500,
//     },
//     allowTouchMove: true,

//     breakpoints: {
//         376: {
//             slidesPerView: 1,
//         },
//         767: {
//             slidesPerView: 3,
//         },
//         1109: {
//             slidesPerView: 3,
//         },
//         1500: {
//             slidesPerView: 3,
//         },
//     },
// });
