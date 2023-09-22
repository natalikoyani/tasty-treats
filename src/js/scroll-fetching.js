import _ from 'lodash';
import { getRecipes } from './api';
import { renderRecipes } from './render-recipe-card';
import { Notify } from 'notiflix';

let isFetching = false;
let hasMore = true;
let page = 2;
let limit = 20;
let lastScrollTop = 0;

const cardGallery = document.querySelector('.cards-gallery');

window.addEventListener('scroll', _.throttle(async () => {

     let scrollTop = window.scrollY || document.documentElement.scrollTop;
     let scrollUpBtn = document.querySelector('.scroll-up-btn');
     let isScrollBtnHidden = scrollUpBtn.classList.contains('visually-hidden');

     if (!isScrollBtnHidden && scrollTop <= 100) {
          scrollUpBtn.classList.add('visually-hidden');
     }

     if (scrollTop > lastScrollTop) {

          if (isScrollBtnHidden && scrollTop > 100) {
               scrollUpBtn.classList.remove('visually-hidden');
          }

          if (!isFetching && hasMore) {

               if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    isFetching = true;
                    let loader = document.querySelector('.backdrop-loader');
                    loader.classList.remove('visually-hidden');
                    let recipes = await getRecipes({ page: page, limit: limit });
                    if (recipes.length) {
                         let markup = renderRecipes(recipes);
                         cardGallery.insertAdjacentHTML('beforeend', markup);
                         page++;
                    }
                    else {
                         hasMore = false;
                         Notify.warning(
                              `We're sorry, but you've reached the end of search results.`,
                              {
                                   timeout: 4000,
                                   useIcon: true
                              },
                         );
                    }
                    loader.classList.add('visually-hidden');
                    isFetching = false;
               }
          }
     }

     lastScrollTop = scrollTop;

}, 300));