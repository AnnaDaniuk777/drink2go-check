export function initSlider() {
  const slides = document.querySelectorAll('.hero__slider-item');
  const prevBtn = document.querySelector('.slider-button-prev');
  const nextBtn = document.querySelector('.slider-button-next');
  const paginationButtons = document.querySelectorAll('.slider__pagination-button');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('hero__slider-item--active');
    });

    slides[index].classList.add('hero__slider-item--active');
    updateHeroBackground(index);
    updatePagination(index);
    updateButtonStates(index);
    currentSlide = index;
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
    paginationButtons.forEach((button) => {
      button.classList.remove('slider__pagination-button--active');
    });

    paginationButtons[index].classList.add('slider__pagination-button--active');
  }

  function updateButtonStates(index) {
    if (index === 0) {
      prevBtn.disabled = true;
      prevBtn.style.opacity = '0.5';
      prevBtn.style.cursor = 'not-allowed';
    } else {
      prevBtn.disabled = false;
      prevBtn.style.opacity = '1';
      prevBtn.style.cursor = 'pointer';
    }

    if (index === slides.length - 1) {
      nextBtn.disabled = true;
      nextBtn.style.opacity = '0.5';
      nextBtn.style.cursor = 'not-allowed';
    } else {
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
    }
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
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
