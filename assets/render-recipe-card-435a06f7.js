(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const u=n=>{const t=localStorage.getItem("favoriteRecipes")?JSON.parse(localStorage.getItem("favoriteRecipes")):[],l=Array.isArray(t)?t.map(r=>r._id):[];return n.map(r=>{const{_id:e,title:s,description:i,thumb:c,rating:o,category:g}=r;let d=l.includes(e),a=Math.round(o);return`<div class="recipe-card"
            style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${c}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat;"
            >

        <svg class="heart-svg${d>0?" heart-filled":""}"
        data-_id="${e}"
        data-title="${s}"
        data-description="${i}"
        data-thumb="${c}"
        data-rating="${o}"
        data-category="${g}"
        >
            <use href="./img/icons.svg#heart"></use>
        </svg>

        <h3 class="recipe-title">${s}</h3>
        <p class="recipe-description two-line-ellipsis">${i}</p>
        <div class="recipe-footer">
            <span class="rating-number">${o}</span>
            <ul class="recipe-rating">
                <li class="rating-item">
                    <svg class="star-svg${a>0?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${a>1?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${a>2?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${a>3?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
                <li class="rating-item">
                    <svg class="star-svg${a>4?" star-filled":""}">
                        <use href="./img/icons.svg#star"></use>
                    </svg>
                </li>
            </ul>
            <button class="recipe-btn" type="button" data-_id="${e}">See recipe</button>
        </div>
    </div>`}).join("")};export{u as r};
