import{a as w,i as a,S as x,e as v,d as F}from"./assets/vendor-2Hd5OlEu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();async function L({currentPage:e=1,name:t="",sortName:o="",genre:i=""}={}){try{const n="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:e,...t&&{name:t},...o&&{sortName:o},...i&&{genre:i}};return(await w.get(n,{params:c})).data}catch(s){return a.error({message:`${s}`,position:"topRight"}),null}}async function P(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",i={limit:12};return(await w.get(o,{params:i})).data}catch(e){return a.error({message:`${e}`,position:"topRight"}),null}}const u="/project-okak/icons.svg";function R(e){const t=e.map(({_id:s,name:r,rating:n,descr:c})=>{const d=Math.round(n*2)/2,A=Array.from({length:5}).map((N,B)=>{const q=Math.min(Math.max(d-B,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${u}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${q}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${u}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${A}</div>
        <p class="feedback-descr">${c}</p>
        <p class="feedback-name">${r}</p>
      </div>`}).join(""),o=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${u}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${t}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${u}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `,i=document.querySelector(".feedback-container");i.innerHTML=o,new x(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,r){return s<3?`<span class="${r}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const r=document.querySelectorAll(".swiper-pagination span");r.forEach(d=>d.classList.remove("swiper-pagination-bullet-active"));const n=s.activeIndex,c=s.slides.length;n===0?r[0].classList.add("swiper-pagination-bullet-active"):n===c-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}},autoplay:{delay:5e3}})}async function j(){try{const e=await P();if(e&&e.data){const o=[...e.data].sort(()=>Math.random()-.5).slice(0,3);R(o)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}j();const C=document.querySelectorAll("section[id]"),O=document.querySelectorAll(".nav-menu-link"),H=document.querySelector(".header"),b=H.offsetHeight,y=100;window.addEventListener("scroll",()=>{let e=null;C.forEach(t=>{const o=t.getBoundingClientRect(),i=t.getAttribute("id");o.top<=b+y&&o.bottom>b+y&&(e=i)}),O.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=()=>{const s=e.querySelectorAll('a[href*="#"]'),r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?(v(document.body),s.forEach(n=>{n.removeEventListener("click",i)})):(F(document.body),s.forEach(n=>{n.addEventListener("click",i)}))};t.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 767px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),v(document.body))})})();const k=document.querySelector(".artists-block-list"),$=document.querySelector(".loader"),m=document.querySelector(".artists-load-more");function I(){k.innerHTML=""}function E(){$.hidden=!1}function l(){$.hidden=!0}function T(){m.hidden=!1}function S(){m.hidden=!0}function M(e){const t=e.map(({_id:o,strArtist:i,strBiographyEN:s,strArtistThumb:r,genres:n})=>`<div class="artist-block" data-id="${o}">
            <a class="artist-link" href="#" aria-label="Go to artist ${i}">
            <img class="artist-img" src="${r||"../img/no-image.jpg"}" alt="${i}" loading="lazy" onerror="this.onerror=null; this.src='../img/no-image.jpg';"></a>
            ${U(n)}
            <h5 class="artist-name">${p(i)}</h5>
            <p class="artist-description">${_(p(s),200)}</p>
            <a class="artist-learn-link" href="#"
        >Learn More<svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use></svg></a>
        </div>`).join("");k.insertAdjacentHTML("beforeend",t)}function U(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(o=>`<li class="artist-genres-item">${p(o)}</li>`).join("")}</ul>`}function p(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function _(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}let f=1,g=0,h=0;window.onload=async e=>{f=1,g=0,S(),I(),E();try{const t=await L();h=t.totalArtists,h===0?(a.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),l()):(M(t.artists),l(),T())}catch(t){a.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",t),l()}};m.addEventListener("click",async()=>{f+=1,E();try{const e=await L({currentPage:f});M(e.artists),g+=e.length,l(),z(),g>=h&&(S(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){a.error({message:"Error loading more Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.error("Load More Error:",e),l()}});function z(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
