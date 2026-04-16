// teamHover.js
// gsap chargé via CDN Webflow (global)

export function init() {
  if (typeof gsap === 'undefined') return
  if (!window.matchMedia('(min-width: 992px)').matches) return

  const items = document.querySelectorAll('.equipe_item')
  const infoWrappers = document.querySelectorAll('.equipe_infos-wrapper')

  const show = (item, wrapper) => {
    gsap.to(item, { x: '-1.56rem', duration: 0.3, ease: 'power2.out' })
    wrapper.style.display = 'block'
    gsap.fromTo(wrapper,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    )
  }

  const hide = (item, wrapper) => {
    gsap.to(item, { x: '0rem', duration: 0.3, ease: 'power2.out' })
    gsap.to(wrapper, {
      opacity: 0, y: 20, duration: 0.3, ease: 'power2.out',
      onComplete: () => { wrapper.style.display = 'none' }
    })
  }

  items.forEach((item) => {
    const key = item.getAttribute('team-animation')
    const wrapper = [...infoWrappers].find(w => w.getAttribute('team-animation') === key)
    if (!wrapper) return

    let hoveredOnCard = false

    item.addEventListener('mouseenter', () => show(item, wrapper))

    item.addEventListener('mouseleave', () => {
      setTimeout(() => { if (!hoveredOnCard) hide(item, wrapper) }, 50)
    })

    wrapper.addEventListener('mouseenter', () => { hoveredOnCard = true })
    wrapper.addEventListener('mouseleave', () => {
      hoveredOnCard = false
      hide(item, wrapper)
    })
  })
}
