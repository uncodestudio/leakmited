const images = document.querySelectorAll('.local-image');

images.forEach((img) => {
  const next = img.nextElementSibling;
  if (next && next.classList.contains('local-link')) {
    next.textContent = '';
    next.appendChild(img);
  }
});