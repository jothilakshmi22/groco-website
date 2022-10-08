const search_box = document.querySelector(".search-form");

const search_btn = document.querySelector("#search-btn");

search_btn.addEventListener("click", () => {
  search_box.classList.toggle("display");
});

const shopping_cart = document.querySelector(".shopping-cart");
const cart_btn = document.querySelector("#cart-btn");
cart_btn.addEventListener("click", () => {
  shopping_cart.classList.toggle("active");
});

const contact_form = document.querySelector(".contact-form");
const login_btn = document.querySelector("#login-btn");

login_btn.addEventListener("click", () => {
  contact_form.classList.toggle("visible");
});

const header = document.querySelector(".navbar");
const menu_btn = document.querySelector("#menu-btn");

menu_btn.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.onscroll = () => {
  const header = document.querySelector(".navbar");

  header.classList.remove("active");
};

// swiper
var swiper = new Swiper(".product-slider", {
  // loop import
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
//  make change 1,2 3,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
