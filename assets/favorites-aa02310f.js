import{a as m}from"./hamburger-menu-3f15a647.js";const d=e=>e.map(r=>{const{_id:t,title:o,description:i,thumb:n,rating:c}=r;let a=Math.round(c);return`<div class="fav-card"
    style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${n}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat; background-size:cover;"
    >

    <svg class="heart-svg heart-filled" data-_id="${t}">
        <use href="./img/icons.svg#heart"></use>
    </svg>

    <h3 class="recipe-title">${o}</h3>
    <p class="recipe-description two-line-ellipsis">${i}</p>
    <div class="recipe-footer">
        <span class="rating-number">${c}</span>
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
        <button class="recipe-btn" type="button" data-_id="${t}">See recipe</button>
    </div>
    </div>`}).join(""),h=document.querySelector(".js-list-fav"),L=document.querySelector(".js-fav-wrapper"),g=document.querySelector(".js-hero-img");let u=localStorage.getItem("favoriteRecipes"),s=u?JSON.parse(u):[];s=Array.isArray(s)?s:[];window.addEventListener("resize",f);f();function f(){window.innerWidth<768&&g.classList.add("visually-hidden"),window.innerWidth>=768&&g.classList.remove("visually-hidden")}function p(e){let r,t;if(e.length)r=d(s),g.classList.remove("visually-hidden"),h.innerHTML=r;else return t=`<div class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </div>`,L.insertAdjacentHTML("beforeend",t)}p(s);const v=document.querySelector(".js-categories-container"),b=s.map(e=>e.category);function y(e){const r=[...new Set(e)],t=r.map(i=>`<button class="fav-category-fltr-btn" id='${i}' type="button" data-category="${i}">${i}</button>`).join(""),o=()=>r.length?`<button class="fav-category-fltr-btn  active-category-fav" id="all" type="button">All categories</button>${t}`:v.innerHTML="";v.innerHTML=o()}y(b);const S=document.querySelector(".js-list-fav"),$=document.querySelector(".js-categories-container");$.addEventListener("click",e=>{const r=document.querySelectorAll(".fav-category-fltr-btn");if(e.target.nodeName==="BUTTON")if(r.forEach(t=>t.classList.remove("active-category-fav")),e.target.classList.toggle("active-category-fav"),e.target.id!=="all")w(e.target.id);else{let t=localStorage.getItem("favoriteRecipes");t&&JSON.parse(t)}});function w(e){const r=s.filter(t=>t.category===e);S.innerHTML=d(r)}const T=document.querySelector(".js-list-fav");T.addEventListener("click",j);function j(e){var t;const r=document.querySelector(".js-list-fav");if(((t=e.target.closest("svg"))==null?void 0:t.nodeName)=="svg"){let i=e.target.closest("svg").dataset._id,n=s.findIndex(a=>a._id===i),c=[...new Set(s.map(a=>a.category))];if(n!==-1){s.splice(n,1),s.length>0?r.innerHTML=d(s):(r.innerHTML="",p(s)),localStorage.setItem("favoriteRecipes",JSON.stringify(s));let a=[...new Set(s.map(l=>l.category))];c.filter(l=>!a.includes(l)).length&&y(a)}}e.target.nodeName==="BUTTON"&&m(e)}
