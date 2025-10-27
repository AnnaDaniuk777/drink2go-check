export function initSlider() {
  const slides = document.querySelectorAll('.hero__slider-item');
  const prevBtn = document.querySelector('.slider-button-prev');
  const nextBtn = document.querySelector('.slider-button-next');
  const paginationButtons = document.querySelectorAll('.slider__pagination-button');
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;

    slides.forEach((slide) => {
      slide.classList.remove('hero__slider-item--active');
    });

    slides[currentSlide].classList.add('hero__slider-item--active');

    updateHeroBackground(currentSlide);
    updatePagination(currentSlide);
    updateButtonStates(currentSlide);
  }

  function updateHeroBackground(index) {
    const hero = document.querySelector('.hero');
    const activeSlide = slides[index];

    hero.classList.remove(
      'hero--biege',
      'hero--lavender',
      'hero--grey'
    );

    if (activeSlide.classList.contains('hero__slider-item--biege')) {
      hero.classList.add('hero--biege');
    } else if (activeSlide.classList.contains('hero__slider-item--lavender')) {
      hero.classList.add('hero--lavender');
    } else if (activeSlide.classList.contains('hero__slider-item--grey')) {
      hero.classList.add('hero--grey');
    }
  }

  function updatePagination(index) {
    paginationButtons.forEach((button, buttonIndex) => {
      button.classList.remove('slider__pagination-button--active');

      if (buttonIndex === index) {
        button.classList.add('slider__pagination-button--active');
      }
    });
  }

  function updateButtonStates(index) {
    const isFirstSlide = index === 0;
    prevBtn.disabled = isFirstSlide;

    const isLastSlide = index === slides.length - 1;
    nextBtn.disabled = isLastSlide;
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
      showSlide(index);
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  showSlide(currentSlide);
}
