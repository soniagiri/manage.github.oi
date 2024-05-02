const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const close = document.querySelector(".mobile-nav-toggle .close ");
const hamburger = document.querySelector(".mobile-nav-toggle .hamburger ");
let open = false;
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? (navToggle.setAttribute("aria-expanded", false),
      (close.style.display = "none"),
      (hamburger.style.display = "block"),
      (document.body.style.overflow = "unset"))
    : (navToggle.setAttribute("aria-expanded", true),
      (close.style.display = "block"),
      (hamburger.style.display = "none"),
      (document.body.style.overflow = "hidden"));
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  open = true;
});

// if(open===false){
//   document.body.style.overflow = 'hidden';
// }else{
//   document.body.style.overflow = 'unset';
// }

const slider = new A11YSlider(document.querySelector(".slider"), {
  autoplayHoverPause: true,
  slidesToShow: 1,
  dots: true,
  adaptiveHeight: false,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: {
    768: {
      slidesToShow: 2,
      arrows: false,
    },
    960: {
      disable: false, // slider disabled 960px to 1279px
    },
    1280: {
      disable: false,
      slidesToShow: 3,
      dots: true, // dots enabled 1280px and up
    },
  },
});
