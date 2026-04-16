export function init() {
  const countersForm = document.querySelector('[count-item="counters"]')
  const listItems = document.querySelectorAll('[count-item="list"] [count-item="category"]')

  if (!countersForm || !listItems.length) return

  countersForm.querySelectorAll('[count-item="category"]').forEach((counterLabel) => {
    const labelText = counterLabel.textContent.trim()
    const counterElement = counterLabel.closest('.recrutement-radio_field')?.querySelector('.count-item')

    if (!counterElement) return

    const count = Array.from(listItems).filter((item) => item.textContent.trim() === labelText).length
    counterElement.textContent = `(${count})`
  })
}
