document.querySelectorAll('.accordion_wrapper').forEach((accordion, index) => {
    const question = accordion.querySelector('.accordion_question');
    const answer = accordion.querySelector('.accordion_paragraph');
    const icon = accordion.querySelector('.accordion_icon');
  
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
  
      document.querySelectorAll('.accordion_wrapper').forEach((item) => {
        item.classList.remove('is-open');
        gsap.to(item.querySelector('.accordion_paragraph'), {
          height: 0,
          duration: 0.3,
          ease: "power1.inOut"
        });
        gsap.to(item.querySelector('.accordion_icon'), { rotate: 0, duration: 0.3 });
        item.querySelector('.accordion_question').setAttribute("aria-expanded", "false");
      });
  
      if (!isOpen) {
        accordion.classList.add('is-open');
        gsap.to(answer, {
          height: "auto",
          duration: 0.4,
          ease: "power1.out",
        });
        gsap.to(icon, { rotate: -180, duration: 0.4 });
        question.setAttribute("aria-expanded", "true");
      }
    });
  });