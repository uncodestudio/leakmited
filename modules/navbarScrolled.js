export function init() {
  const selectors = [
    '.navbar_component',
    '.navbar_logo-link',
    '.menu-icon_line-top',
    '.menu-icon_line-middle',
    '.menu-icon_line-bottom'
  ]

  const elements = selectors.map((s) => document.querySelector(s))

  window.addEventListener('scroll', () => {
    const action = window.scrollY > 20 ? 'add' : 'remove'
    elements.forEach((el) => el?.classList[action]('navbar-scrolled'))
  })
}
