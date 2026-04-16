// testimoniesParallax.js
// gsap + ScrollTrigger chargés via CDN Webflow (globals)

export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  gsap.matchMedia().add('(min-width: 480px)', () => {
    gsap.to('.testimonies-anim_9rem', {
      y: '6rem',
      scrollTrigger: {
        trigger: '.section_testimonies-component',
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.to('.testimonies-anim_2rem', {
      y: '-8rem',
      scrollTrigger: {
        trigger: '.section_testimonies-component',
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    })
  })
}
