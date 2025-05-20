document.querySelectorAll('.recrutement-radio_field').forEach((field) => {
    const label = field.querySelector('.recrutement-radio_label');
  
    // MutationObserver pour écouter les changements de classes
    const observer = new MutationObserver(() => {
      if (field.classList.contains('is-active')) {
        label.classList.add('is-active');
      } else {
        label.classList.remove('is-active');
      }
    });
  
    observer.observe(field, { attributes: true, attributeFilter: ['class'] });
  });  