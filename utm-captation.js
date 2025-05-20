(function () {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
    // 1. Capture UTM depuis l'URL et stocke en localStorage
    const urlParams = new URLSearchParams(window.location.search);
    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        localStorage.setItem(param, value);
      }
    });
  
    // 2. Remplissage des champs formulaire si présent dans le DOM
    document.addEventListener('DOMContentLoaded', () => {
      utmParams.forEach(param => {
        const storedValue = localStorage.getItem(param);
        const input = document.querySelector(`[name="${param}"]`);
        if (storedValue && input) {
          input.value = storedValue;
        }
      });
    });
  })();  
