// testimoniesCarousel.js
const FADE_DURATION = 200 // ms
const INTERVAL = 10000 // ms

function setupCarousel(testimonialSelector, photoSelector) {
  const items = [...document.querySelectorAll(testimonialSelector)]
  const photos = [...document.querySelectorAll(photoSelector)]
  if (!items.length || !photos.length) return

  let current = 0
  let interval

  const show = (i) => {
    const prev = items[current]

    prev.style.opacity = '0'
    setTimeout(() => {
      prev.style.display = 'none'
      items[i].style.display = 'block'
      items[i].style.opacity = '0'
      requestAnimationFrame(() => {
        items[i].style.opacity = '1'
      })
    }, FADE_DURATION)

    photos[current].classList.remove('is-active')
    photos[i].classList.add('is-active')
    current = i
  }

  const next = () => show((current + 1) % items.length)

  photos.forEach((photo, i) => {
    photo.addEventListener('click', () => {
      if (i === current) return
      clearInterval(interval)
      show(i)
      interval = setInterval(next, INTERVAL)
    })
  })

  // Init
  items.forEach((item, i) => {
    item.style.transition = `opacity ${FADE_DURATION}ms ease`
    item.style.display = i === 0 ? 'block' : 'none'
    item.style.opacity = i === 0 ? '1' : '0'
  })

  requestAnimationFrame(() => photos[0].classList.add('is-active'))

  interval = setInterval(next, INTERVAL)
}

export function init() {
  setupCarousel(
    '.home-challenge_testimonies-list-item',
    '.home-challenge_testimonies_image-wrapper'
  )
  setupCarousel(
    '.home-loyalty_testimonies-list-item',
    '.home-loyalty_testimonies-image-wrapper'
  )
}
