import Splide from '@splidejs/splide'
import '@splidejs/splide/css/core'

export function init() {
  new Splide('.slider', {
    perPage: 3,
    perMove: 1,
    focus: 'right',
    type: 'slide',
    gap: '1.5rem',
    arrows: true,
    pagination: false,
    speed: 600,
    dragAngleThreshold: 30,
    autoWidth: false,
    rewind: false,
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true,
    breakpoints: {
      991: { perPage: 2.5, gap: '72px' },
      767: { perPage: 1.5, gap: '20px' },
      479: { perPage: 1.5, gap: '20px' }
    }
  }).mount()
}
