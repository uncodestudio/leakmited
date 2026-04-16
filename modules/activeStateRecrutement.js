export function init() {
  document.querySelectorAll('.recrutement-radio_field').forEach((field) => {
    const label = field.querySelector('.recrutement-radio_label')

    const observer = new MutationObserver(() => {
      label.classList.toggle('is-active', field.classList.contains('is-active'))
    })

    observer.observe(field, { attributes: true, attributeFilter: ['class'] })
  })
}
