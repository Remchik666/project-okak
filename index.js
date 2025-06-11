import{a as h,i as u,S as z,e as x,d as D}from"./assets/vendor-2Hd5OlEu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();async function V(){try{const n="https://sound-wave.b.goit.study/api"+"/genres";return(await h.get(n)).data}catch(e){return u.error({message:`${e}`,position:"topRight"}),null}}async function K({currentPage:e=1,name:t="",sortName:n="",genre:r=""}={}){try{const a="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:e,...t&&{name:t},...n&&{sortName:n},...r&&{genre:r}};return(await h.get(a,{params:c})).data}catch(s){return u.error({message:`${s}`,position:"topRight"}),null}}async function J(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",n=`/artists/${e}`,r=t+n;return(await h.get(r)).data}catch(t){return u.error({message:`${t}`,position:"topRight"}),null}}async function W(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",n=`/artists/${e}/albums`,r=t+n;return(await h.get(r)).data}catch(t){return u.error({message:`${t}`,position:"topRight"}),null}}async function Q(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",r={limit:12};return(await h.get(n,{params:r})).data}catch(e){return u.error({message:`${e}`,position:"topRight"}),null}}const b="/project-okak/icons.svg";function X(e){const t=e.map(({_id:s,name:o,rating:a,descr:c})=>{const i=Math.round(a*2)/2,d=Array.from({length:5}).map((p,g)=>{const G=Math.min(Math.max(i-g,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${b}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${G}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${b}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${d}</div>
        <p class="feedback-descr">${c}</p>
        <p class="feedback-name">${o}</p>
      </div>`}).join(""),n=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${b}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${t}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${b}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `,r=document.querySelector(".feedback-container");r.innerHTML=n,new z(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,o){return s<3?`<span class="${o}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const o=document.querySelectorAll(".swiper-pagination span");o.forEach(p=>p.classList.remove("swiper-pagination-bullet-active"));const a=s.activeIndex,c=s.slides.length;a===0?o[0].classList.add("swiper-pagination-bullet-active"):a===c-1?o[2].classList.add("swiper-pagination-bullet-active"):o[1].classList.add("swiper-pagination-bullet-active");const i=document.querySelector(".custom-swiper-button-prev"),d=document.querySelector(".custom-swiper-button-next");i.classList.toggle("disabled",a===0),d.classList.toggle("disabled",a===c-1)}},autoplay:{delay:5e3}})}async function Y(){try{const e=await Q();if(e&&e.data){const n=[...e.data].sort(()=>Math.random()-.5).slice(0,3);X(n)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}Y();const Z=document.querySelectorAll("section[id]"),ee=document.querySelectorAll(".nav-menu-link"),te=document.querySelector(".header"),R=te.offsetHeight,P=100;window.addEventListener("scroll",()=>{let e=null;Z.forEach(t=>{const n=t.getBoundingClientRect(),r=t.getAttribute("id");n.top<=R+P&&n.bottom>R+P&&(e=r)}),ee.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const s=e.querySelectorAll('a[href*="#"]'),o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),o?(x(document.body),s.forEach(a=>{a.removeEventListener("click",r)})):(D(document.body),s.forEach(a=>{a.addEventListener("click",r)}))};t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 767px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))})})();const se="/project-okak/assets/icons-Er7r_hNm.svg",ne=document.querySelector(".artists-block-list"),j=document.querySelector(".modal-albums"),F=document.querySelector(".modal-biography");ne.addEventListener("click",re);async function re(e){if(e.target.className!=="artist-learn-link")return;const t=e.target.dataset.id,n=e.target.parentElement.children[1].innerHTML;oe(t,n)}async function oe(e,t){const n=document.querySelector(".artist-modal-backdrop"),r=document.querySelector(".modal-close-btn"),s=document.querySelector(".artist-modal-backdrop"),o=document.querySelector(".modal-loader");n.classList.remove("is-hidden"),o.classList.remove("is-hidden"),document.body.style.overflow="hidden",r.addEventListener("click",i),s.addEventListener("click",d),document.addEventListener("keydown",p);const a=await J(e),c=await W(e);o.classList.add("is-hidden"),j.innerHTML="",F.innerHTML="",ce(a,t),ae(c.albumsList);function i(){n.classList.add("is-hidden"),document.body.style.overflow="",r.removeEventListener("click",i),s.removeEventListener("click",d),document.removeEventListener("keydown",p)}function d(g){g.target===g.currentTarget&&i()}function p(g){g.key==="Escape"&&i()}}function ae(e){j.innerHTML=e.map(t=>ie(t)).join("")}function ie(e){const t=e.tracks.map(r=>{const s=Math.floor(r.intDuration/6e4),o=Math.floor(r.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${r.strTrack}</span>
        <span class="track-time">${s}:${o}</span>
        <a class="track-link" target="_blank" href="${r.movie}">${r.movie?`<svg class="track-link-youtube">
            <use href="${se}#youtube"></use>
          </svg>`:""}</a>
      </li>
    `}).join("");return`
    <li class="modal-album-item">
      <h3 class="modal-album-title">${e.strAlbum}</h3>
      <ul class="modal-track-list">
            <li class="modal-track-item">
        <p class="modal-track-name-title track-name">Track</p>
        <p class="modal-track-time-title track-time">Time</p>
        <p class="modal-track-link-title track-link">Link</p>
      </li>
            ${t}
      </ul>
    </li>
  `}function ce({intDiedYear:e,intFormedYear:t,intMembers:n,strGender:r,strArtist:s,strArtistThumb:o,strBiographyEN:a,strCountry:c},i){const d=t||e?`      ${t??"last"}-${e??"present"}`:"information missing",p=`
   <p class="modal-biography__title">${s}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${o}" alt="${s}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${d}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${r}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${c}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${a}</span></p>
        <ul class="modal-biography__genre-list">${i}</ul>
        </div></div>`;F.innerHTML=p}const T="/project-okak/assets/no-image-aiJRBcV6.jpg",H=document.querySelector(".artists-block-list"),I=document.querySelector(".loader"),E=document.querySelector(".artists-load-more"),N=document.querySelector(".artists-silence-block");function le(){N.classList.remove("hidden")}function C(){N.classList.add("hidden")}function q(){H.innerHTML=""}function de(){I.classList.remove("hidden")}function k(){I.classList.add("hidden")}function ue(){E.classList.remove("hidden")}function M(){E.classList.add("hidden")}function pe(e){const t=e.map(({_id:n,strArtist:r,strBiographyEN:s,strArtistThumb:o,genres:a})=>`<div class="artist-block">
      <img class="artist-img" src="${o||T}" alt="${r}" loading="lazy" onerror="this.onerror=null; this.src='${T}';">
      ${me(a)}
      <h5 class="artist-name">${m(r)}</h5>
      <p class="artist-description">${ge(m(s),200)}</p>
      <a class="artist-learn-link" data-id="${n}">Learn More
        <svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use>
        </svg>
      </a>
    </div>`).join("");H.insertAdjacentHTML("beforeend",t)}function me(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(n=>`<li class="artist-genres-item">${m(n)}</li>`).join("")}</ul>`}function m(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function ge(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}function fe(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}const he=document.querySelector(".filter-genre-dropbox");function ye(e){const t=e.map(({genre:n})=>`<input id="genre-${m(n)}" class="filter-genre-input" type="radio" name="genreGroup" value="${m(n)}" />
    <label for="genre-${m(n)}" class="filter-genre-label">${m(n)}</label>`).join("");he.insertAdjacentHTML("beforeend",t)}const w=document.querySelector(".artists-filter-toggle"),U=document.querySelector(".artists-filter-form"),$=document.querySelector(".filter-sorting-toggle"),be=document.querySelector(".filter-sorting-dropbox"),S=document.querySelector(".filter-genre-toggle"),ve=document.querySelector(".filter-genre-dropbox");w.addEventListener("click",()=>{U.classList.toggle("open"),w.classList.toggle("open"),w.querySelector(".filter-toggle-icon").classList.toggle("rotate")});$.addEventListener("click",()=>{be.classList.toggle("open"),$.classList.toggle("open"),$.querySelector(".filter-sorting-icon").classList.toggle("rotate")});S.addEventListener("click",()=>{ve.classList.toggle("open"),S.classList.toggle("open"),S.querySelector(".filter-genre-icon").classList.toggle("rotate")});let B=document.querySelector(".filter-name-input"),A=document.getElementsByName("sortingGroup"),_=document.getElementsByName("genreGroup");function v(e){const t=Array.from(e).find(n=>n.checked);return t?t.value:""}const Le=document.querySelector(".artists-filter-reset"),ke=document.querySelector(".artists-silence-button");function O(){B.value="",Array.from(A).forEach(e=>e.checked=e.id==="filter-default"),Array.from(_).forEach(e=>e.checked=!1),l=1,f=0,q(),C()}Le.addEventListener("click",async()=>{O(),await y({page:l})});ke.addEventListener("click",async()=>{O(),await y({page:l})});async function y({name:e="",sortName:t="",genre:n="",page:r=1}={}){M(),de(),C();try{const s=await K({name:e,sortName:t,genre:n,currentPage:r});L=s.totalArtists,L===0?(u.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),k(),le()):(pe(s.artists),f+=s.artists.length,k(),ue())}catch(s){u.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",s),k()}}let l=1,f=0,L=0;window.addEventListener("DOMContentLoaded",async()=>{l=1,f=0,q(),await y({page:l});const e=await V();e.length>0&&ye(e)});E.addEventListener("click",async()=>{l+=1,await y({name:B.value,sortName:v(A),genre:v(_),page:l}),fe(),f>=L&&(M(),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))});U.addEventListener("change",async e=>{l=1,f=0,q(),await y({name:B.value,sortName:v(A),genre:v(_),page:l}),f>=L&&M()});
//# sourceMappingURL=index.js.map
