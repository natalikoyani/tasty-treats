import"./hamburger-menu-56b81221.js";const m=e=>e.map(r=>{const{_id:s,title:t,description:a,thumb:f,rating:l}=r;let n=Math.round(l);return`<div class="fav-card"
    style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${f}), lightgray -29.5px 0px / 125.194% 112.544% no-repeat;"
    >

    <svg class="heart-svg heart-filled" data-_id="${s}">
        <use href="./img/icons.svg#heart"></use>
    </svg>

    <h3 class="recipe-title">${t}</h3>
    <p class="recipe-description two-line-ellipsis">${a}</p>
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
        <button class="recipe-btn" type="button">See recipe</button>
    </div>
    </div>`}).join(""),h=document.querySelector(".js-list-fav"),y=document.querySelector(".js-fav-wrapper"),o=document.querySelector(".js-hero-img");document.querySelector(".recipe-btn");document.querySelector(".recipe-card");window.addEventListener("resize",p);p();function p(){window.innerWidth<768&&o.classList.add("visually-hidden"),window.innerWidth>=768&&o.classList.remove("visually-hidden")}let g=localStorage.getItem("favoriteRecipes"),i=g?JSON.parse(g):[];i=Array.isArray(i)?i:[];function b(e,r){let s,t;if(e.length)s=m(i),o.classList.remove("visually-hidden"),h.innerHTML=s;else return t=`<div class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </div>`,y.insertAdjacentHTML("beforeend",t)}b(i);const u=document.querySelector(".js-categories-container"),S=i.map(e=>e.category);function $(e){const r=[...new Set(e)],s=r.map(a=>`<button class="fav-category-fltr-btn" id='${a}' type="button">${a}</button>`).join(""),t=()=>r.length?`<button class="btn-all-categories  active-category-fav" type="button">All categories</button>${s}`:u.innerHTML="";u.innerHTML=t()}$(S);document.querySelector(".js-list-fav");let d=localStorage.getItem("favoriteRecipes");d&&JSON.parse(d);let v=localStorage.getItem("favoriteRecipes"),c=v?JSON.parse(v):[];c=Array.isArray(c)?c:[];const L=document.querySelectorAll(".heart-filled");L.forEach(e=>{e.addEventListener("click",w)});function w(e){const r=e.target.closest(".fav-card");let s=e.currentTarget.dataset._id,t=c.findIndex(a=>a._id===s);t!==-1&&(r.remove(),c.splice(t,1),localStorage.setItem("favoriteRecipes",JSON.stringify(c)))}
