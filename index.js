import{a as k,i as c,S as F,e as y,d as P}from"./assets/vendor-2Hd5OlEu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();async function S({currentPage:e=1,name:t="",sortName:o="",genre:n=""}={}){try{const i="https://sound-wave.b.goit.study/api"+"/artists",a={limit:8,page:e,...t&&{name:t},...o&&{sortName:o},...n&&{genre:n}};return(await k.get(i,{params:a})).data}catch(s){return c.error({message:`${s}`,position:"topRight"}),null}}async function R(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",n={limit:12};return(await k.get(o,{params:n})).data}catch(e){return c.error({message:`${e}`,position:"topRight"}),null}}const u="/project-okak/icons.svg";function j(e){const t=e.map(({_id:s,name:r,rating:i,descr:a})=>{const d=Math.round(i*2)/2,p=Array.from({length:5}).map((b,q)=>{const x=Math.min(Math.max(d-q,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${u}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${x}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${u}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${p}</div>
        <p class="feedback-descr">${a}</p>
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
  `,n=document.querySelector(".feedback-container");n.innerHTML=o,new F(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,r){return s<3?`<span class="${r}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const r=document.querySelectorAll(".swiper-pagination span");r.forEach(b=>b.classList.remove("swiper-pagination-bullet-active"));const i=s.activeIndex,a=s.slides.length;i===0?r[0].classList.add("swiper-pagination-bullet-active"):i===a-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active");const d=document.querySelector(".custom-swiper-button-prev"),p=document.querySelector(".custom-swiper-button-next");d.classList.toggle("disabled",i===0),p.classList.toggle("disabled",i===a-1)}},autoplay:{delay:5e3}})}async function C(){try{const e=await R();if(e&&e.data){const o=[...e.data].sort(()=>Math.random()-.5).slice(0,3);j(o)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}C();const O=document.querySelectorAll("section[id]"),H=document.querySelectorAll(".nav-menu-link"),I=document.querySelector(".header"),w=I.offsetHeight,L=100;window.addEventListener("scroll",()=>{let e=null;O.forEach(t=>{const o=t.getBoundingClientRect(),n=t.getAttribute("id");o.top<=w+L&&o.bottom>w+L&&(e=n)}),H.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const s=e.querySelectorAll('a[href*="#"]'),r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?(y(document.body),s.forEach(i=>{i.removeEventListener("click",n)})):(P(document.body),s.forEach(i=>{i.addEventListener("click",n)}))};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 767px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),y(document.body))})})();const $=document.querySelector(".artists-block-list"),E=document.querySelector(".loader"),v=document.querySelector(".artists-load-more");function T(){$.innerHTML=""}function M(){E.hidden=!1}function l(){E.hidden=!0}function U(){v.hidden=!1}function A(){v.hidden=!0}function B(e){const t=e.map(({_id:o,strArtist:n,strBiographyEN:s,strArtistThumb:r,genres:i})=>`<div class="artist-block" data-id="${o}">
            <a class="artist-link" href="#" aria-label="Go to artist ${n}">
            <img class="artist-img" src="${r||"../img/no-image.jpg"}" alt="${n}" loading="lazy" onerror="this.onerror=null; this.src='../img/no-image.jpg';"></a>
            ${_(i)}
            <h5 class="artist-name">${f(n)}</h5>
            <p class="artist-description">${z(f(s),200)}</p>
            <a class="artist-learn-link" href="#"
        >Learn More<svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use></svg></a>
        </div>`).join("");$.insertAdjacentHTML("beforeend",t)}function _(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(o=>`<li class="artist-genres-item">${f(o)}</li>`).join("")}</ul>`}function f(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function z(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}let g=1,h=0,m=0;window.onload=async e=>{g=1,h=0,A(),T(),M();try{const t=await S();m=t.totalArtists,m===0?(c.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),l()):(B(t.artists),l(),U())}catch(t){c.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",t),l()}};v.addEventListener("click",async()=>{g+=1,M();try{const e=await S({currentPage:g});B(e.artists),h+=e.length,l(),N(),h>=m&&(A(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){c.error({message:"Error loading more Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.error("Load More Error:",e),l()}});function N(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
