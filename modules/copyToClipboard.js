export function init() {
  function bindCopy(layoutSelector, textSelector) {
    document.querySelectorAll(layoutSelector).forEach((layout) => {
      layout.style.cursor = 'pointer'

      layout.addEventListener('click', () => {
        const textEl = layout.querySelector(textSelector)
        if (!textEl) return

        navigator.clipboard.writeText(textEl.textContent.trim()).then(() => {
          const copyWrapper = layout.querySelector('.copy_wrapper')
          const copyIcon = copyWrapper?.querySelector('.copy')
          if (!copyWrapper || !copyIcon) return

          copyIcon.style.display = 'none'

          const confirm = document.createElement('div')
          confirm.textContent = '✓ Copié !'
          confirm.style.cssText = 'color: inherit; font-size: inherit;'
          copyWrapper.appendChild(confirm)

          setTimeout(() => {
            confirm.remove()
            copyIcon.style.display = ''
          }, 2000)
        }).catch(() => alert('Erreur lors de la copie'))
      })
    })
  }

  bindCopy('.infos-press_short-layout', '.is-copied_short')
  bindCopy('.infos-press_long-layout', '.is-copied_long')
}
