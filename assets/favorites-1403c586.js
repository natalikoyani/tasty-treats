import{a as m}from"./hamburger-menu-59090838.js";const y=e=>e.map(s=>{const{_id:t,title:r,description:a,thumb:n,rating:l}=s;let o=Math.round(l);return`<div class="fav-card"
    style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${n}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat;"
    >

    <svg class="heart-svg heart-filled" data-_id="${t}">
        <use href="./img/icons.svg#heart"></use>
    </svg>

    <h3 class="recipe-title">${r}</h3>
    <p class="recipe-description two-line-ellipsis">${a}</p>
    <div class="recipe-footer">
        <span class="rating-number">${l}</span>
        <ul class="recipe-rating">
            <li class="rating-item">
                <svg class="star-svg${o>0?" star-filled":""}">
                    <use href="./img/icons.svg#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${o>1?" star-filled":""}">
                    <use href="./img/icons.svg#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${o>2?" star-filled":""}">
                    <use href="./img/icons.svg#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${o>3?" star-filled":""}">
                    <use href="./img/icons.svg#star"></use>
                </svg>
            </li>
            <li class="rating-item">
                <svg class="star-svg${o>4?" star-filled":""}">
                    <use href="./img/icons.svg#star"></use>
                </svg>
            </li>
        </ul>
        <button class="recipe-btn" type="button" data-_id="${t}">See recipe</button>
    </div>
    </div>`}).join(""),h=document.querySelector(".js-list-fav"),S=document.querySelector(".js-fav-wrapper"),g=document.querySelector(".js-hero-img");document.querySelector(".recipe-btn");document.querySelector(".recipe-card");window.addEventListener("resize",f);f();function f(){window.innerWidth<768&&g.classList.add("visually-hidden"),window.innerWidth>=768&&g.classList.remove("visually-hidden")}let d=localStorage.getItem("favoriteRecipes"),i=d?JSON.parse(d):[];i=Array.isArray(i)?i:[];function b(e,s){let t,r;if(e.length)t=y(i),g.classList.remove("visually-hidden"),h.innerHTML=t;else return r=`<div class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </div>`,S.insertAdjacentHTML("beforeend",r)}b(i);const u=document.querySelector(".js-categories-container"),$=i.map(e=>e.category);function L(e){const s=[...new Set(e)],t=s.map(a=>`<button class="fav-category-fltr-btn" id='${a}' type="button">${a}</button>`).join(""),r=()=>s.length?`<button class="btn-all-categories  active-category-fav" type="button">All categories</button>${t}`:u.innerHTML="";u.innerHTML=r()}L($);document.querySelector(".js-list-fav");let v=localStorage.getItem("favoriteRecipes");v&&JSON.parse(v);let p=localStorage.getItem("favoriteRecipes"),c=p?JSON.parse(p):[];c=Array.isArray(c)?c:[];const w=document.querySelector(".js-list-fav");w.addEventListener("click",j);function j(e){var s;if(((s=e.target.closest("svg"))==null?void 0:s.nodeName)=="svg"){const t=e.target.closest(".fav-card");let a=e.target.closest("svg").dataset._id,n=c.findIndex(l=>l._id===a);n!==-1&&(t.remove(),c.splice(n,1),localStorage.setItem("favoriteRecipes",JSON.stringify(c)))}e.target.nodeName==="BUTTON"&&m(e)}
