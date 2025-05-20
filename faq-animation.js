document.querySelectorAll('.faq_accordion').forEach((accordion) => {
    const question = accordion.querySelector('.faq_question');
    const answer = accordion.querySelector('.faq_answer');
    const icon = accordion.querySelector('.faq_icon-wrapper');
  
    // Initialisation accessibilité & style
    gsap.set(answer, { height: 0, overflow: 'hidden' });
    gsap.set(icon, { rotate: 0 });
    gsap.set(accordion, { borderColor: 'transparent' });
    question.setAttribute("aria-expanded", "false");
  
    question.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('is-open');
  
      // Ferme tous les autres
      document.querySelectorAll('.faq_accordion').forEach((item) => {
        item.classList.remove('is-open');
        gsap.to(item.querySelector('.faq_answer'), {
          height: 0,
          duration: 0.3,
          ease: "power1.inOut"
        });
        gsap.to(item.querySelector('.faq_icon-wrapper'), { rotate: 0, duration: 0.3 });
        gsap.to(item, { borderColor: 'transparent', duration: 0.3 });
        item.querySelector('.faq_question').setAttribute("aria-expanded", "false");
      });
  
      // Ouvre si fermé
      if (!isOpen) {
        accordion.classList.add('is-open');
        gsap.to(answer, {
          height: "auto",
          duration: 0.4,
          ease: "power1.out",
        });
        gsap.to(icon, { rotate: -90, duration: 0.4 });
        gsap.to(accordion, { borderColor: "#92d5ff", duration: 0.4 });
        question.setAttribute("aria-expanded", "true");
      }
    });
  });