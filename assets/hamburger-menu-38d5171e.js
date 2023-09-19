(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=a=>{const s=localStorage.getItem("favoriteRecipes")?JSON.parse(localStorage.getItem("favoriteRecipes")):[],o=Array.isArray(s)?s.map(r=>r._id):[];return a.map(r=>{const{_id:e,title:t,description:i,thumb:c,rating:l,category:d}=r;let u=o.includes(e),n=Math.round(l);return`<div class="recipe-card"
            style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${c}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat;"
            >

        <svg class="heart-svg${u>0?" heart-filled":""}"
        data-_id="${e}"
        data-title="${t}"
        data-description="${i}"
        data-thumb="${c}"
        data-rating="${l}"
        data-category="${d}"
        >
            <use href="./img/icons.svg#heart"></use>
        </svg>

        <h3 class="recipe-title">${t}</h3>
        <p class="recipe-description two-line-ellipsis">${i}</p>
        <div class="recipe-footer">
            <span class="rating-number">${l}</span>
            <ul class="recipe-rating">
                <li class="rating-item">
                    <svg class="star-svg${n>0?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${n>1?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${n>2?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${n>3?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${n>4?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
            </ul>
            <button class="recipe-btn" type="button" data-_id="${e}">See recipe</button>
        </div>
    </div>`}).join("")};(()=>{const a=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),a.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};s.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(a.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();export{g as r};
