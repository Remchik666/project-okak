import{a as g,i as m,S as h,e as l,d as v}from"./assets/vendor-2Hd5OlEu.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function w(){try{const r="https://sound-wave.b.goit.study/api"+"/feedbacks",n={limit:12};return(await g.get(r,{params:n})).data}catch(s){return m.error({message:`${s}`,position:"topRight"}),null}}function b(s){const r=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="/img/icons/icons.svg#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${s.map(({_id:e,name:t,rating:o,descr:a})=>{const c=Math.round(o*2)/2,p=Array.from({length:5}).map((E,f)=>`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="/img/icons/icons.svg#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${Math.min(Math.max(c-f,0),1)*100}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="/img/icons/icons.svg#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`).join("");return`
      <div class="swiper-slide" data-id="${e}">
        <div class="star-rating">${p}</div>
        <p class="feedback-descr">${a}</p>
        <p class="feedback-name">${t}</p>
      </div>`}).join("")}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="/img/icons/icons.svg#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
  `,n=document.querySelector(".feedback-container");n.innerHTML=r,new h(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return e<3?`<span class="${t}" data-bullet="${e}"></span>`:""}},on:{slideChange:function(e){const t=document.querySelectorAll(".swiper-pagination span");t.forEach(c=>c.classList.remove("swiper-pagination-bullet-active"));const o=e.activeIndex,a=e.slides.length;o===0?t[0].classList.add("swiper-pagination-bullet-active"):o===a-1?t[2].classList.add("swiper-pagination-bullet-active"):t[1].classList.add("swiper-pagination-bullet-active")}},autoplay:{delay:5e3}})}async function y(){try{const s=await w();console.log("API response:",s),s&&s.data?b(s.data):console.warn("No feedbacks found or wrong format:",s)}catch(s){console.error("Failed to load feedbacks:",s)}}y();const L=document.querySelectorAll("section[id]"),S=document.querySelectorAll(".nav-menu-link"),k=document.querySelector(".header"),d=k.offsetHeight,u=100;window.addEventListener("scroll",()=>{let s=null;L.forEach(i=>{const r=i.getBoundingClientRect(),n=i.getAttribute("id");r.top<=d+u&&r.bottom>d+u&&(s=n)}),S.forEach(i=>{i.getAttribute("href").replace("#","")===s?i.classList.add("active"):i.classList.remove("active")})});(()=>{const s=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const e=s.querySelectorAll('a[href*="#"]'),t=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!t),s.classList.toggle("is-open"),t?(l(document.body),e.forEach(o=>{o.removeEventListener("click",n)})):(v(document.body),e.forEach(o=>{o.addEventListener("click",n)}))};i.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 767px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),l(document.body))})})();
//# sourceMappingURL=index.js.map
