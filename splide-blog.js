new Splide('.slider', {
    perPage: 3,
    perMove: 1,
    focus: 'right', // 0 = left and 'center' = center
    type: 'slide', // 'loop' or 'slide'
    gap: '1.5rem', // space between slides
    arrows: false, // 'slider' or false
    pagination: false, // 'slider' or false
    speed: 600, // transition speed in miliseconds
    dragAngleThreshold: 30, // default is 30
    autoWidth: false, // for cards with differing widths
    rewind: false, // go back to beginning when reach end
    rewindSpeed: 400,
    waitForTransition: false,
    updateOnMove: true,
    trimSpace: true, // true removes empty space from end of list
    breakpoints: {
      991: {
        // Tablet
        perPage: 2.5,
        gap: '72px',
      },
      767: {
        // Mobile Landscape
        perPage: 1.5,
        gap: '20px',
      },
      479: {
        // Mobile Portrait
        perPage: 1.5,
        gap: '20px',
      }
    }
  }).mount();  