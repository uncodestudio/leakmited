const elementsToToggle = [
  ".navbar_component",
  ".navbar_logo-link", 
  ".menu-icon_line-top",
  ".menu-icon_line-middle",
  ".menu-icon_line-bottom"
];

const elements = elementsToToggle.map(selector => document.querySelector(selector));

window.addEventListener("scroll", () => {
  const action = window.scrollY > 20 ? "add" : "remove";
  elements.forEach(element => element?.classList[action]("navbar-scrolled"));
});
