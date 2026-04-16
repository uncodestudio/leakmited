export function init() {
  function bindHover(itemSelector, arrowSelector, imageSelector, yOut) {
    document.querySelectorAll(itemSelector).forEach((item) => {
      const arrow = item.querySelector(arrowSelector)
      const image = item.querySelector(imageSelector)

      item.addEventListener('mouseenter', () => {
        gsap.timeline().to(arrow, { y: -20, duration: 0.1 }).to(arrow, { y: 0, duration: 0.3, ease: 'power2.out' })
        gsap.to(image, { filter: 'grayscale(0%)', duration: 0.3, ease: 'power2.out' })
      })

      item.addEventListener('mouseleave', () => {
        gsap.timeline().to(arrow, { y: -20, duration: 0.1 }).to(arrow, { y: yOut, duration: 0.3, ease: 'power2.in' })
        gsap.to(image, { filter: 'grayscale(100%)', duration: 0.3, ease: 'power2.in' })
      })
    })
  }

  bindHover('.solution_list-item', '.solution_arrow', '.solution_bg-image', 100)
  bindHover('.usecase-resultats_list-item', '.usecase-resultats_arrow', '.usecase_bg-image', 80)
}
