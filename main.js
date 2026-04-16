// main.js
import { init as initUtm } from './modules/utmCaptation.js'
initUtm()

const moduleDetectors = {
  accordeonAnimation: {
    selector: '.accordion_wrapper',
    initFn: () => import('./modules/accordeonAnimation.js').then(m => m.init())
  },
  activeStateRecrutement: {
    selector: '.recrutement-radio_field',
    initFn: () => import('./modules/activeStateRecrutement.js').then(m => m.init())
  },
  cardHover: {
    selector: '.solution_list-item',
    initFn: () => import('./modules/cardHover.js').then(m => m.init())
  },
  cardTestimonies: {
    selector: '.testimonies-slide',
    initFn: () => import('./modules/cardTestimonies.js').then(m => m.init())
  },
  countItem: {
    selector: '[count-item="counters"]',
    initFn: () => import('./modules/countItem.js').then(m => m.init())
  },
  faqAnimation: {
    selector: '.faq_accordion',
    initFn: () => import('./modules/faqAnimation.js').then(m => m.init())
  },
  navbarScrolled: {
    selector: '.navbar_component',
    initFn: () => import('./modules/navbarScrolled.js').then(m => m.init())
  },
  splideBlog: {
    selector: '.slider',
    initFn: () => import('./modules/splideBlog.js').then(m => m.init())
  },
  copyToClipboard: {
    selector: '.infos-press_short-layout',
    initFn: () => import('./modules/copyToClipboard.js').then(m => m.init())
  },
  testimonialsAnimation: {
    selector: '.testimonial-avatar',
    initFn: () => import('./modules/testimonialsAnimation.js').then(m => m.init())
  },
}

Object.keys(moduleDetectors).forEach((moduleName) => {
  const config = moduleDetectors[moduleName]
  if (document.querySelector(config.selector)) {
    config.initFn().catch(err => console.error(`❌ ${moduleName}:`, err))
  }
})
