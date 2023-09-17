import { getEvents } from './api.js';
import { sliderRender } from './hero-render-slider.js';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

getEvents().then(res => {
     return res.map(obj => sliderRender(obj)).join('');
}).then(markup => {
     let swiperWrapper = document.querySelector('.swiper-wrapper');
     swiperWrapper.innerHTML = markup;
}).catch(error => console.error(error));

// init Swiper:
const swiper = new Swiper('.js-hero-slider', {
     slidesPerView: 1,
     spaceBetween: 20,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     breakpoints: {
          0: {
               width: 496,
               height: 280
          },
          768: {
               width: 871
          }
     }
});