export function sliderRender(obj) {
     const {
          cook: {
               name: chiefName,
               imgUrl: chiefImgPNG,
               imgWebpUrl: chiefImgWebp
          },
          topic: {
               area: previewArea,
               name: previewName,
               imgUrl: dishImgPng,
               imgWebpUrl: dishImgWebp,
               previewUrl: previewImgPng,
               previewWebpUrl: previewImgWebp,
          }
     } = obj;

     return `
     <div class="swiper-slide">
          <div class="hero-chief">
               <picture class="hero-chief-img hero-picture">
                    <source
                    srcset="${chiefImgWebp}"
                    type="image/webp"
                    />
                    <source
                    srcset="${chiefImgPNG}"
                    type="image/png"
                    />
                    <img
                    src="${chiefImgPNG}"
                    alt="${chiefName}"
                    width="109"
                    height="272"
                    />
               </picture>
          </div>
          <div class="hero-preview">
               <picture class="hero-preview-img hero-picture">
                    <source
                    srcset="${previewImgWebp}"
                    type="image/webp"
                    />
                    <source
                    srcset="${previewImgPng}"
                    type="image/png"
                    />
                    <img
                    src="${previewImgPng}"
                    alt="preview"
                    width="172"
                    height="154"
                    />
               </picture>
               <h2 class="hero-preview-title">${previewName}</h2>
               <p class="hero-preview-desc">${previewArea}</p>
          </div>
          <div class="hero-dish">
               <picture class="hero-dish-img hero-picture">
                    <source
                    srcset="${dishImgWebp}"
                    type="image/webp"
                    />
                    <source
                    srcset="${dishImgPng}"
                    type="image/png"
                    />
                    <img
                    src="${dishImgPng}"
                    alt="${previewName}"
                    width="351"
                    height="442"
                    />
               </picture>
          </div>
     </div>
     `
}