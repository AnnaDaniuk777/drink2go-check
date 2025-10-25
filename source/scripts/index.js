/* в этот файл добавляет скрипты*/
import { toggleMenu } from './mobile-menu.js';
import { initSlider } from './slider.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  initSlider();
});

