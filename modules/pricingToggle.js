// pricingToggle.js

export function init() {
  const toggle = document.querySelector('.home-pricing_toggle-layout')
  const wrapper = document.querySelector('.pricing-cards_component')
  if (!toggle || !wrapper) return

  if (!wrapper.dataset.period) wrapper.dataset.period = 'month'

  const activate = () => {
    const isYear = wrapper.dataset.period === 'year'
    wrapper.dataset.period = isYear ? 'month' : 'year'
    toggle.setAttribute('aria-checked', String(!isYear))
  }

  toggle.addEventListener('click', activate)
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      activate()
    }
  })
}
