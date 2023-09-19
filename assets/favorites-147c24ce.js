import{r as g}from"./hamburger-menu-043d33c5.js";const f=document.querySelector(".js-list-fav"),v=document.querySelector(".js-fav-wrapper"),c=document.querySelector(".js-hero-img");document.querySelector(".recipe-btn");document.querySelector(".recipe-card");window.addEventListener("resize",p);p();function p(){window.innerWidth<768&&c.classList.add("visually-hidden"),window.innerWidth>=768&&c.classList.remove("visually-hidden")}let n=localStorage.getItem("favoriteRecipes"),a=n?JSON.parse(n):[];a=Array.isArray(a)?a:[];function y(e,i){let r,t;if(e.length)r=g(a),c.classList.remove("visually-hidden"),f.innerHTML=r;else return t=`<div class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </div>`,v.insertAdjacentHTML("beforeend",t)}y(a);const l=document.querySelector(".js-categories-container"),m=a.map(e=>e.category);function h(e){const i=[...new Set(e)],r=i.map(s=>`<button class="fav-category-fltr-btn" id='${s}' type="button">${s}</button>`).join(""),t=()=>i.length?`<button class="btn-all-categories  active-category-fav" type="button">All categories</button>${r}`:l.innerHTML="";l.innerHTML=t()}h(m);document.querySelector(".js-list-fav");let u=localStorage.getItem("favoriteRecipes");u&&JSON.parse(u);let d=localStorage.getItem("favoriteRecipes"),o=d?JSON.parse(d):[];o=Array.isArray(o)?o:[];const S=document.querySelectorAll(".heart-filled");S.forEach(e=>{e.addEventListener("click",L)});function L(e){const i=e.target.closest(".recipe-card");let r=e.currentTarget.dataset._id,t=o.findIndex(s=>s._id===r);t!==-1&&(i.remove(),o.splice(t,1),localStorage.setItem("favoriteRecipes",JSON.stringify(o)))}
