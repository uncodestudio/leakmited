// main.js
import './styles/scrollAnimations.css'
import './styles/logoFade.css'
const moduleDetectors = {
  scrollAnimations: {
    selector: '[fade-in-scroll]',
    initFn: () => import('./modules/scrollAnimations.js').then(m => m.init())
  },
  horizontalParallax: {
    selector: '.product-marketplace_products-wrapper',
    initFn: () => import('./modules/horizontalParallax.js').then(m => m.init())
  },
  horizontalParallaxHeader: {
    selector: '.header-marketplace_products-wrapper',
    initFn: () => import('./modules/horizontalParallax.js').then(m => m.init())
  },
  horizontalParallaxPadel: {
    selector: '.padel-tour-header_image-list',
    initFn: () => import('./modules/horizontalParallax.js').then(m => m.init())
  },
  pricingToggle: {
    selector: '.home-pricing_toggle-layout',
    initFn: () => import('./modules/pricingToggle.js').then(m => m.init())
  },
  teamHover: {
    selector: '.equipe_item',
    initFn: () => import('./modules/teamHover.js').then(m => m.init())
  },
  faqAccordion: {
    selector: '.faq_accordion',
    initFn: () => import('./modules/faqAccordion.js').then(m => m.init())
  },
  testimoniesParallax: {
    selector: '.testimonies-anim_9rem',
    initFn: () => import('./modules/testimoniesParallax.js').then(m => m.init())
  },

  testimoniesCarousel: {
    selector: '.home-loyalty_testimonies-list-item',
    initFn: () => import('./modules/testimoniesCarousel.js').then(m => m.init())
  },
  // exemple:
  // myModule: {
  //   selector: '.my-selector',
  //   initFn: initMyModule
  // }
}

let modulesLoaded = 0
let modulesSkipped = 0

Object.keys(moduleDetectors).forEach((moduleName) => {
  const config = moduleDetectors[moduleName]
  const elementExists = document.querySelector(config.selector)

  if (elementExists) {
    console.log(`📦 Init ${moduleName}...`)
    try {
      config.initFn()
      modulesLoaded++
    } catch (error) {
      console.error(`❌ Erreur ${moduleName}:`, error)
    }
  } else {
    modulesSkipped++
  }
})

console.log(`✅ ${modulesLoaded} module(s) chargé(s), ${modulesSkipped} skippé(s)`)
