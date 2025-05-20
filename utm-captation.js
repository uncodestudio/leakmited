const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

utmParams.forEach(param => {
  const storedValue = localStorage.getItem(param);
  const input = document.querySelector(`[name="${param}"]`);

  if (storedValue && input) {
    input.value = storedValue;
  }
});
