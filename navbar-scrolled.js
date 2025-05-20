const navbar = document.querySelector(".navbar_component");
const logo = document.querySelector(".navbar_logo-link");
const lines = document.querySelectorAll(".menu-icon_line-top, .menu-icon_line-middle, .menu-icon_line-bottom");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;

  navbar.classList.toggle("navbar-scrolled", scrolled);
  logo.classList.toggle("navbar-scrolled", scrolled);

  lines.forEach(line => {
    line.classList.toggle("navbar-scrolled", scrolled);
  });
});