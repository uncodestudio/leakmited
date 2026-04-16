export function init() {
  const avatars = Array.from(document.querySelectorAll('.testimonial-avatar'))
  const contents = Array.from(document.querySelectorAll('.testimonial-content'))
  let activeIndex = 0
  let interval

  function activateAvatar(index) {
    activeIndex = index

    avatars.forEach((avatar, i) => {
      gsap.to(avatar, i === index
        ? { scale: 1, opacity: 1, duration: 0.4 }
        : { scale: 0.75, opacity: 0.5, duration: 0.4 }
      )
    })

    contents.forEach((content, i) => {
      if (i === index) {
        content.style.display = 'block'
        gsap.fromTo(content, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      } else {
        content.style.display = 'none'
      }
    })
  }

  function resetInterval() {
    clearInterval(interval)
    interval = setInterval(() => activateAvatar((activeIndex + 1) % avatars.length), 15000)
  }

  avatars.forEach((avatar, index) => {
    avatar.addEventListener('click', () => {
      activateAvatar(index)
      resetInterval()
    })
  })

  activateAvatar(0)
  resetInterval()
}
