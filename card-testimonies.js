let isAnimating = false;
let currentIndex = 0;

const slides = document.querySelectorAll('.testimonies-slide');
const slidesArray = Array.from(slides);

if (slides.length === 0) {
  console.error('❌ No .testimonies-slide elements found!');
} else {
  slides[0].classList.add('current');
  console.log('✅ Initial slide marked as current');
}

function slideTo(newIndex, direction) {
  const currentSlide = document.querySelector('.testimonies-slide.current');
  const nextSlide = slides[newIndex];

  if (isAnimating) {
    console.log('⛔ Animation locked, skipping');
    return;
  }

  if (!currentSlide || !nextSlide) {
    console.warn('❌ Slide not found. Current:', currentSlide, 'Next:', nextSlide);
    return;
  }

  console.log('🎯 Transitioning to slide index:', newIndex, 'Direction:', direction);
  isAnimating = true;

  let xValue = '35%';
  let rotationValue = 15;

  if (direction === 'prev') {
    xValue = '-35%';
    rotationValue = -15;
  }

  // Reset all slides first
  slides.forEach(slide => {
    slide.style.zIndex = 0;
    slide.style.pointerEvents = 'none';
  });

  // OUT: current slide
  currentSlide.style.zIndex = 1;
  gsap.to(currentSlide, {
    opacity: 0,
    x: xValue,
    rotationZ: rotationValue,
    duration: 0.5,
    onComplete: () => {
      currentSlide.classList.remove('current');
      currentSlide.style.transform = '';
      console.log('✅ Current slide animated out');
    },
  });

  // IN: next slide
  nextSlide.classList.add('current');
  nextSlide.style.zIndex = 2;
  nextSlide.style.pointerEvents = 'auto';
  console.log('🎬 Animating next slide IN');
  gsap.fromTo(nextSlide, { opacity: 0, x: '0', rotationZ: -9 },
  {
    opacity: 1,
    x: '0%',
    rotationZ: 0,
    duration: 0.8,
    onComplete: () => {
      console.log('✅ Next slide animation complete');
      isAnimating = false;
    }
  });
}

// Bind all nav buttons (in every slide)
const nextBtns = document.querySelectorAll('.arrow_slider-testimonies-next');
const prevBtns = document.querySelectorAll('.arrow_slider-testimonies-prev');

if (nextBtns.length && prevBtns.length) {
  console.log(`✅ Navigation buttons found — ${nextBtns.length} next, ${prevBtns.length} prev`);

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isAnimating) {
        currentIndex = (currentIndex + 1) % slidesArray.length;
        slideTo(currentIndex, 'next');
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isAnimating) {
        currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
        slideTo(currentIndex, 'prev');
      }
    });
  });

} else {
  console.error('❌ Navigation buttons not found!');
}