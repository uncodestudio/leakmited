$(".solution_list-item").hover(
    function () {
      const arrow = $(this).find(".solution_arrow");
      const image = $(this).find(".solution_bg-image");
  
      gsap.timeline()
        .to(arrow, { y: -20, duration: 0.1 })
        .to(arrow, { y: 0, duration: 0.3, ease: "power2.out" });
  
      gsap.to(image, {
        filter: "grayscale(0%)",
        duration: 0.3,
        ease: "power2.out"
      });
    },
    function () {
      const arrow = $(this).find(".solution_arrow");
      const image = $(this).find(".solution_bg-image");
  
      gsap.timeline()
        .to(arrow, { y: -20, duration: 0.1 })
        .to(arrow, { y: 100, duration: 0.3, ease: "power2.in" });
  
      gsap.to(image, {
        filter: "grayscale(100%)",
        duration: 0.3,
        ease: "power2.in"
      });
    }
  );
  
  $(".usecase-resultats_list-item").hover(
    function () {
      const arrow = $(this).find(".usecase-resultats_arrow");
      const image = $(this).find(".usecase_bg-image");
  
      gsap.timeline()
        .to(arrow, { y: -20, duration: 0.1 })
        .to(arrow, { y: 0, duration: 0.3, ease: "power2.out" });
  
      gsap.to(image, {
        filter: "grayscale(0%)",
        duration: 0.3,
        ease: "power2.out"
      });
    },
    function () {
      const arrow = $(this).find(".usecase-resultats_arrow");
      const image = $(this).find(".usecase_bg-image");
  
      gsap.timeline()
        .to(arrow, { y: -20, duration: 0.1 })
        .to(arrow, { y: 80, duration: 0.3, ease: "power2.in" });
  
      gsap.to(image, {
        filter: "grayscale(100%)",
        duration: 0.3,
        ease: "power2.in"
      });
    }
  );