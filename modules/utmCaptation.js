export function init() {
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

  const urlParams = new URLSearchParams(window.location.search)
  utmParams.forEach((param) => {
    const value = urlParams.get(param)
    if (value) localStorage.setItem(param, value)

    const stored = localStorage.getItem(param)
    const input = document.querySelector(`[name="${param}"]`)
    if (stored && input) input.value = stored
  })
}
