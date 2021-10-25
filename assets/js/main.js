var swiper = new Swiper(".swiper", {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiperpag = new Swiper(".mySwiper", {
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});

const lightbox = GLightbox({
  selector: "glightbox3",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  onOpen: () => {
    console.log("Lightbox opened");
  },
  beforeSlideLoad: (slide, data) => {
    // Need to execute a script in the slide?
    // You can do that here...
  },
});
// const header = document.querySelector(".navbar-style");
// const nav = document.querySelector("#nav-logo");
// const navLogo = document.querySelector(".navbar-logo");
// const navLine = document.querySelector(".navbar-border");

// window.onscroll = function () {
//   let top = window.scrollY;

//   if (top >= 1700 && top <= 2100) {
//     header.style.backgroundColor = "transparent";
//     nav.style.backgroundColor = "transparent";
//     navLogo.style.color = "black";
//     navLine.style.borderBottom = "transparent";
//   } else if (top > 2100) {
//     header.style.backgroundColor = "#1d1b1c";
//     nav.style.backgroundColor = "#1d1b1c";
//     navLogo.style.color = "white";
//   } else {
//     header.style.backgroundColor = "#1d1b1c";
//     nav.style.backgroundColor = "#1d1b1c";
//   }
// };

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Initiate gallery lightbox
 */
const galleryLightbox = GLightbox({
  selector: ".gallery-lightbox",
});
