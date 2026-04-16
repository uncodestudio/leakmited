export function init() {
  let isAnimating = false
  let currentIndex = 0

  const slides = document.querySelectorAll('.testimonies-slide')
  slides[0].classList.add('current')

  function slideTo(newIndex, direction) {
    if (isAnimating) return

    const currentSlide = document.querySelector('.testimonies-slide.current')
    const nextSlide = slides[newIndex]
    if (!currentSlide || !nextSlide) return

    isAnimating = true
    const xValue = direction === 'prev' ? '-35%' : '35%'
    const rotationValue = direction === 'prev' ? -15 : 15

    slides.forEach((slide) => {
      slide.style.zIndex = 0
      slide.style.pointerEvents = 'none'
    })

    currentSlide.style.zIndex = 1
    gsap.to(currentSlide, {
      opacity: 0, x: xValue, rotationZ: rotationValue, duration: 0.5,
      onComplete: () => {
        currentSlide.classList.remove('current')
        currentSlide.style.transform = ''
      }
    })

    nextSlide.classList.add('current')
    nextSlide.style.zIndex = 2
    nextSlide.style.pointerEvents = 'auto'
    gsap.fromTo(nextSlide,
      { opacity: 0, x: '0', rotationZ: -9 },
      { opacity: 1, x: '0%', rotationZ: 0, duration: 0.8, onComplete: () => { isAnimating = false } }
    )
  }

  document.querySelectorAll('.arrow_slider-testimonies-next').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length
      slideTo(currentIndex, 'next')
    })
  })

  document.querySelectorAll('.arrow_slider-testimonies-prev').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length
      slideTo(currentIndex, 'prev')
    })
  })
}
