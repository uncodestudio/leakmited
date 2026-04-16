// horizontalParallax.js
// gsap + ScrollTrigger chargés via CDN Webflow (globals)

let initialized = false

export function init() {
  if (initialized) return
  initialized = true

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  const parallax = (triggerEl, listTop, listBottom) => {
    const trigger = { trigger: triggerEl, start: 'top bottom', end: 'bottom top', scrub: true }
    gsap.to(listTop, { x: '-10%', ease: 'none', scrollTrigger: trigger })
    gsap.to(listBottom, { x: '10%', ease: 'none', scrollTrigger: trigger })
  }

  parallax(
    '.product-marketplace_products-wrapper',
    '.product-marketplace_collection-list-top',
    '.product-marketplace_collection-list-bottom'
  )

  parallax(
    '.header-marketplace_products-wrapper',
    '.header-marketplace_collection-list-top',
    '.header-marketplace_collection-list-bottom'
  )

  parallax(
    '.padel-tour-header_image-list',
    '.padel-tour-header_list-top',
    '.padel-tour-header_list-bottom'
  )
}
