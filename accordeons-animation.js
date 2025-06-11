// Configuration globale des images (UNE SEULE FOIS)
const allImages = document.querySelectorAll('.accordion_image');

// Configuration initiale des images
allImages.forEach((img, imgIndex) => {
  if (imgIndex === 0) {
    // Première image visible
    gsap.set(img, { display: 'block', opacity: 1 });
  } else {
    // Autres images cachées
    gsap.set(img, { display: 'none', opacity: 0 });
  }
});

// Ensuite, configuration des accordéons
document.querySelectorAll('.accordion_wrapper').forEach((accordion, index) => {
  const question = accordion.querySelector('.accordion_question');
  const answer = accordion.querySelector('.accordion_paragraph');
  const icon = accordion.querySelector('.accordion_icon');
  const currentImage = allImages[index];

  // Cache toutes les réponses
  gsap.set(answer, { height: 0, overflow: 'hidden' });
  gsap.set(icon, { rotate: 0 });
  gsap.set(accordion, { borderColor: 'transparent' });
  question.setAttribute("aria-expanded", "false");

  // Ouvre le premier accordéon automatiquement
  if (index === 0) {
    accordion.classList.add('is-open');
    gsap.set(answer, { height: 'auto' });
    gsap.set(icon, { rotate: 180 });
    question.setAttribute("aria-expanded", "true");
  }

  question.addEventListener('click', () => {
    const isOpen = accordion.classList.contains('is-open');

    // Ferme tous les accordéons
    document.querySelectorAll('.accordion_wrapper').forEach((item) => {
      item.classList.remove('is-open');
      gsap.to(item.querySelector('.accordion_paragraph'), {
        height: 0,
        duration: 0.3,
        ease: "power1.inOut"
      });
      gsap.to(item.querySelector('.accordion_icon'), { 
        rotate: 0, 
        duration: 0.3 
      });
      item.querySelector('.accordion_question').setAttribute("aria-expanded", "false");
    });

    // Cache toutes les images SAUF celle correspondante
    allImages.forEach((img, imgIndex) => {
      if (imgIndex !== index) {
        // Cache toutes les autres images
        gsap.to(img, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(img, { display: 'none' });
          }
        });
      }
    });

    // Si ce n'était pas ouvert, ouvre cet accordéon
    if (!isOpen) {
      accordion.classList.add('is-open');
      gsap.to(answer, {
        height: "auto",
        duration: 0.4,
        ease: "power1.out",
      });
      gsap.to(icon, { 
        rotate: -180, 
        duration: 0.4 
      });
      question.setAttribute("aria-expanded", "true");
    }

    // TOUJOURS afficher l'image correspondante (avec délai)
    if (currentImage) {
      gsap.set(currentImage, { display: 'block', opacity: 0 });
      gsap.to(currentImage, {
        opacity: 1,
        duration: 0.3,
        delay: 0.2, // Délai augmenté pour attendre que les autres disparaissent
        ease: "power1.out"
      });
    }
  });
});
