export function init() {
  const allImages = document.querySelectorAll('.accordion_image')
  const allAccordions = document.querySelectorAll('.accordion_wrapper')

  allImages.forEach((img, i) => {
    gsap.set(img, i === 0 ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 })
  })

  allAccordions.forEach((accordion, index) => {
    const question = accordion.querySelector('.accordion_question')
    const answer = accordion.querySelector('.accordion_paragraph')
    const icon = accordion.querySelector('.accordion_icon')
    const currentImage = allImages[index]

    gsap.set(answer, { height: 0, overflow: 'hidden' })
    gsap.set(icon, { rotate: 0 })
    question.setAttribute('aria-expanded', 'false')

    if (index === 0) {
      accordion.classList.add('is-open')
      gsap.set(answer, { height: 'auto' })
      gsap.set(icon, { rotate: 180 })
      question.setAttribute('aria-expanded', 'true')
    }

    question.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('is-open')

      allAccordions.forEach((item) => {
        item.classList.remove('is-open')
        gsap.to(item.querySelector('.accordion_paragraph'), { height: 0, duration: 0.3, ease: 'power1.inOut' })
        gsap.to(item.querySelector('.accordion_icon'), { rotate: 0, duration: 0.3 })
        item.querySelector('.accordion_question').setAttribute('aria-expanded', 'false')
      })

      allImages.forEach((img, i) => {
        if (i !== index) {
          gsap.to(img, { opacity: 0, duration: 0.2, ease: 'power1.out', onComplete: () => gsap.set(img, { display: 'none' }) })
        }
      })

      if (!isOpen) {
        accordion.classList.add('is-open')
        gsap.to(answer, { height: 'auto', duration: 0.4, ease: 'power1.out' })
        gsap.to(icon, { rotate: -180, duration: 0.4 })
        question.setAttribute('aria-expanded', 'true')
      }

      if (currentImage) {
        gsap.set(currentImage, { display: 'block', opacity: 0 })
        gsap.to(currentImage, { opacity: 1, duration: 0.3, delay: 0.2, ease: 'power1.out' })
      }
    })
  })
}
