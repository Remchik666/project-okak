import{a as w,i as n,S as F}from"./assets/vendor-Bjzu1yLH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();async function y({currentPage:e=1,name:t="",sortName:o="",genre:i=""}={}){try{const a="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:e,...t&&{name:t},...o&&{sortName:o},...i&&{genre:i}};return(await w.get(a,{params:c})).data}catch(s){return n.error({message:`${s}`,position:"topRight"}),null}}async function P(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",i={limit:12};return(await w.get(o,{params:i})).data}catch(e){return n.error({message:`${e}`,position:"topRight"}),null}}const u="/project-okak/icons.svg";function R(e){const t=e.map(({_id:s,name:r,rating:a,descr:c})=>{const d=Math.round(a*2)/2,E=Array.from({length:5}).map((_,M)=>{const B=Math.min(Math.max(d-M,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${u}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${B}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${u}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${E}</div>
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
  `,i=document.querySelector(".feedback-container");i.innerHTML=o,new F(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,r){return s<3?`<span class="${r}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const r=document.querySelectorAll(".swiper-pagination span");r.forEach(d=>d.classList.remove("swiper-pagination-bullet-active"));const a=s.activeIndex,c=s.slides.length;a===0?r[0].classList.add("swiper-pagination-bullet-active"):a===c-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}},autoplay:{delay:5e3}})}async function q(){try{const e=await P();if(e&&e.data){const o=[...e.data].sort(()=>Math.random()-.5).slice(0,3);R(o)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}q();const x=document.querySelectorAll("section[id]"),j=document.querySelectorAll(".nav-menu-link"),C=document.querySelector(".header"),v=C.offsetHeight,b=100;window.addEventListener("scroll",()=>{let e=null;x.forEach(t=>{const o=t.getBoundingClientRect(),i=t.getAttribute("id");o.top<=v+b&&o.bottom>v+b&&(e=i)}),j.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});const L=document.querySelector(".artists-block-list"),k=document.querySelector(".loader"),m=document.querySelector(".artists-load-more");function H(){L.innerHTML=""}function $(){k.hidden=!1}function l(){k.hidden=!0}function I(){m.hidden=!1}function S(){m.hidden=!0}function A(e){const t=e.map(({_id:o,strArtist:i,strBiographyEN:s,strArtistThumb:r,genres:a})=>`<div class="artist-block" data-id="${o}">
            <a class="artist-link" href="#" aria-label="Go to artist ${i}">
            <img class="artist-img" src="${r||"../img/no-image.jpg"}" alt="${i}" loading="lazy" onerror="this.onerror=null; this.src='../img/no-image.jpg';"></a>
            ${O(a)}
            <h5 class="artist-name">${p(i)}</h5>
            <p class="artist-description">${T(p(s),200)}</p>
            <a class="artist-learn-link" href="#"
        >Learn More<svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use></svg></a>
        </div>`).join("");L.insertAdjacentHTML("beforeend",t)}function O(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(o=>`<li class="artist-genres-item">${p(o)}</li>`).join("")}</ul>`}function p(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function T(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}let f=1,g=0,h=0;window.onload=async e=>{f=1,g=0,S(),H(),$();try{const t=await y();h=t.totalArtists,h===0?(n.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),l()):(A(t.artists),l(),I())}catch(t){n.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",t),l()}};m.addEventListener("click",async()=>{f+=1,$();try{const e=await y({currentPage:f});A(e.artists),g+=e.length,l(),U(),g>=h&&(S(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){n.error({message:"Error loading more Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.error("Load More Error:",e),l()}});function U(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
