const navbar = document.querySelector(".navbar_component");
const logo = document.querySelector(".navbar_logo-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("navbar-scrolled");
    logo.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
    logo.classList.remove("navbar-scrolled");
  }
});