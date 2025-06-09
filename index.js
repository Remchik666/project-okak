import{a as m,i as g,S as b,e as d,d as w}from"./assets/vendor-2Hd5OlEu.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function y(){try{const i="https://sound-wave.b.goit.study/api"+"/feedbacks",o={limit:12};return(await m.get(i,{params:o})).data}catch(s){return g.error({message:`${s}`,position:"topRight"}),null}}const a="/project-okak/icons.svg";function L(s){const n=s.map(({_id:e,name:t,rating:r,descr:c})=>{const l=Math.round(r*2)/2,f=Array.from({length:5}).map(($,h)=>{const v=Math.min(Math.max(l-h,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${a}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${v}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${a}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${e}">
        <div class="star-rating">${f}</div>
        <p class="feedback-descr">${c}</p>
        <p class="feedback-name">${t}</p>
      </div>`}).join(""),i=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${a}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${n}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${a}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `,o=document.querySelector(".feedback-container");o.innerHTML=i,new b(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return e<3?`<span class="${t}" data-bullet="${e}"></span>`:""}},on:{slideChange:function(e){const t=document.querySelectorAll(".swiper-pagination span");t.forEach(l=>l.classList.remove("swiper-pagination-bullet-active"));const r=e.activeIndex,c=e.slides.length;r===0?t[0].classList.add("swiper-pagination-bullet-active"):r===c-1?t[2].classList.add("swiper-pagination-bullet-active"):t[1].classList.add("swiper-pagination-bullet-active")}},autoplay:{delay:5e3}})}async function k(){try{const s=await y();if(s&&s.data){const i=[...s.data].sort(()=>Math.random()-.5).slice(0,3);L(i)}else console.warn("No feedbacks found or wrong format:",s)}catch(s){console.error("Failed to load feedbacks:",s)}}k();const S=document.querySelectorAll("section[id]"),E=document.querySelectorAll(".nav-menu-link"),M=document.querySelector(".header"),u=M.offsetHeight,p=100;window.addEventListener("scroll",()=>{let s=null;S.forEach(n=>{const i=n.getBoundingClientRect(),o=n.getAttribute("id");i.top<=u+p&&i.bottom>u+p&&(s=o)}),E.forEach(n=>{n.getAttribute("href").replace("#","")===s?n.classList.add("active"):n.classList.remove("active")})});(()=>{const s=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=()=>{const e=s.querySelectorAll('a[href*="#"]'),t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),s.classList.toggle("is-open"),t?(d(document.body),e.forEach(r=>{r.removeEventListener("click",o)})):(w(document.body),e.forEach(r=>{r.addEventListener("click",o)}))};n.addEventListener("click",o),i.addEventListener("click",o),window.matchMedia("(min-width: 767px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),d(document.body))})})();
//# sourceMappingURL=index.js.map
