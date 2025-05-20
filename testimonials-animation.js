const avatars = Array.from(document.querySelectorAll('.testimonial-avatar'));
const contents = Array.from(document.querySelectorAll('.testimonial-content'));
let activeIndex = 0;
let interval;

// Fonction d'activation
function activateAvatar(index) {
  activeIndex = index;

  avatars.forEach((avatar, i) => {
    if (i === index) {
      gsap.to(avatar, { scale: 1, opacity: 1, duration: 0.4 });
    } else {
      gsap.to(avatar, { scale: 0.75, opacity: 0.5, duration: 0.4 });
    }
  });

  contents.forEach((content, i) => {
    if (i === index) {
      content.style.display = 'block';
      gsap.fromTo(content, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    } else {
      content.style.display = 'none';
    }
  });
}

// Fonction pour passer au suivant
function nextAvatar() {
  const nextIndex = (activeIndex + 1) % avatars.length;
  activateAvatar(nextIndex);
}

// Clic sur un avatar
avatars.forEach((avatar, index) => {
  avatar.addEventListener('click', () => {
    activateAvatar(index);
    resetInterval();
  });
});

// Timer pour rotation auto toutes 15 secondes
function startInterval() {
  interval = setInterval(() => {
    nextAvatar();
  }, 15000);
}

// Reset le timer au clic
function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Init
activateAvatar(0);
startInterval();