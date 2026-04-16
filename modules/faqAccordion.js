// faqAccordion.js
// gsap chargé via CDN Webflow (global)

export function init() {
  if (typeof gsap === 'undefined') return

  document.querySelectorAll('.faq_accordion').forEach((accordion, index) => {
    const question = accordion.querySelector('.faq_question')
    const answer = accordion.querySelector('.faq_answer')
    const icon = accordion.querySelector('.faq_icon-wrapper')
    if (!question || !answer) return

    gsap.set(answer, { height: 0, overflow: 'hidden' })

    const toggle = () => {
      const isOpen = accordion.classList.contains('is-open')

      document.querySelectorAll('.faq_accordion').forEach((a) => {
        if (a === accordion) return
        a.classList.remove('is-open')
        const i = a.querySelector('.faq_icon-wrapper')
        const ans = a.querySelector('.faq_answer')
        if (i) i.classList.remove('is-open')
        if (ans) gsap.to(ans, { height: 0, duration: 0.4, ease: 'power2.inOut' })
      })

      if (isOpen) {
        accordion.classList.remove('is-open')
        if (icon) icon.classList.remove('is-open')
        gsap.to(answer, { height: 0, duration: 0.4, ease: 'power2.inOut' })
      } else {
        accordion.classList.add('is-open')
        if (icon) icon.classList.add('is-open')
        gsap.to(answer, { height: 'auto', duration: 0.4, ease: 'power2.inOut' })
      }
    }

    question.addEventListener('click', toggle)
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle()
      }
    })
  })
}
