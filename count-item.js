function updateCounters() {
    const countersForm = document.querySelector('[count-item="counters"]');
    const listItems = document.querySelectorAll('[count-item="list"] [count-item="category"]');
  
    if (!countersForm || !listItems.length) return;
  
    countersForm.querySelectorAll('[count-item="category"]').forEach(counterLabel => {
      const labelText = counterLabel.textContent.trim();
  
      // Va chercher .count-item dans le même .recrutement-radio_field
      const counterElement = counterLabel.closest('.recrutement-radio_field')?.querySelector(
        '.count-item');
  
      if (!counterElement) {
        console.warn('⛔ Aucun .count-item trouvé pour:', labelText);
        return;
      }
  
      // Compter dans la liste
      const count = Array.from(listItems).filter(item => {
        return item.textContent.trim() === labelText;
      }).length;
  
      counterElement.textContent = `(${count})`;
    });
  }
  
  updateCounters();