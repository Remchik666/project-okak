import{a as y,i as l,S as D,e as x,d as z,b as J}from"./assets/vendor-CFlek-mx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();async function W(){try{const n="https://sound-wave.b.goit.study/api"+"/genres";return(await y.get(n)).data}catch(e){return l.error({message:`${e}`,position:"topRight"}),null}}async function Q({currentPage:e=1,name:t="",sortName:n="",genre:o=""}={}){try{const a="https://sound-wave.b.goit.study/api"+"/artists",i={limit:8,page:e,...t&&{name:t},...n&&{sortName:n},...o&&{genre:o}};return(await y.get(a,{params:i})).data}catch(s){return l.error({message:`${s}`,position:"topRight"}),null}}async function X(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",n=`/artists/${e}`,o=t+n;return(await y.get(o)).data}catch(t){return l.error({message:`${t}`,position:"topRight"}),null}}async function Y(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",n=`/artists/${e}/albums`,o=t+n;return(await y.get(o)).data}catch(t){return l.error({message:`${t}`,position:"topRight"}),null}}async function Z(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",o={limit:12};return(await y.get(n,{params:o})).data}catch(e){return l.error({message:`${e}`,position:"topRight"}),null}}async function ee(e,t,n){try{const r="https://sound-wave.b.goit.study/api"+"/feedbacks",a={name:e,rating:t,descr:n},i=await y.post(r,a);return console.log(a),i.data}catch(o){return l.error({message:`${o}`,position:"topRight"}),null}}const L="/project-okak/icons.svg";function te(e){const t=e.map(({_id:s,name:r,rating:a,descr:i})=>{const c=Math.round(a*2)/2,d=Array.from({length:5}).map((p,u)=>{const V=Math.min(Math.max(c-u,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${L}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${V}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${L}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${d}</div>
        <p class="feedback-descr">${i}</p>
        <p class="feedback-name">${r}</p>
      </div>`}).join(""),n=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${L}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${t}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${L}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `,o=document.querySelector(".feedback-container");o.innerHTML=n,new D(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,r){return s<3?`<span class="${r}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const r=document.querySelectorAll(".swiper-pagination span");r.forEach(p=>p.classList.remove("swiper-pagination-bullet-active"));const a=s.activeIndex,i=s.slides.length;a===0?r[0].classList.add("swiper-pagination-bullet-active"):a===i-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active");const c=document.querySelector(".custom-swiper-button-prev"),d=document.querySelector(".custom-swiper-button-next");c.classList.toggle("disabled",a===0),d.classList.toggle("disabled",a===i-1)}},autoplay:{delay:5e3}})}async function se(){try{const e=await Z();if(e&&e.data){const n=[...e.data].sort(()=>Math.random()-.5).slice(0,3);te(n)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}se();const ne=document.querySelectorAll("section[id]"),oe=document.querySelectorAll(".nav-menu-link"),re=document.querySelector(".header"),T=re.offsetHeight,F=100;window.addEventListener("scroll",()=>{let e=null;ne.forEach(t=>{const n=t.getBoundingClientRect(),o=t.getAttribute("id");n.top<=T+F&&n.bottom>T+F&&(e=o)}),oe.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{const s=e.querySelectorAll('a[href*="#"]'),r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?(x(document.body),s.forEach(a=>{a.removeEventListener("click",o)})):(z(document.body),s.forEach(a=>{a.addEventListener("click",o)}))};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 767px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),x(document.body))})})();const ae="/project-okak/assets/icons-Er7r_hNm.svg",ie=document.querySelector(".artists-block-list"),H=document.querySelector(".modal-albums"),I=document.querySelector(".modal-biography");ie.addEventListener("click",ce);async function ce(e){if(e.target.className!=="artist-learn-link")return;const t=e.target.dataset.id,n=e.target.parentElement.children[1].innerHTML;le(t,n)}async function le(e,t){const n=document.querySelector(".artist-modal-backdrop"),o=document.querySelector(".modal-close-btn"),s=document.querySelector(".artist-modal-backdrop"),r=document.querySelector(".modal-loader");n.classList.remove("is-hidden"),r.classList.remove("is-hidden"),document.body.style.overflow="hidden",o.addEventListener("click",c),s.addEventListener("click",d),document.addEventListener("keydown",p);const a=await X(e),i=await Y(e);r.classList.add("is-hidden"),H.innerHTML="",I.innerHTML="",pe(a,t),de(i.albumsList);function c(){n.classList.add("is-hidden"),document.body.style.overflow="",o.removeEventListener("click",c),s.removeEventListener("click",d),document.removeEventListener("keydown",p)}function d(u){u.target===u.currentTarget&&c()}function p(u){u.key==="Escape"&&c()}}function de(e){H.innerHTML=e.map(t=>ue(t)).join("")}function ue(e){const t=e.tracks.map(o=>{const s=Math.floor(o.intDuration/6e4),r=Math.floor(o.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${o.strTrack}</span>
        <span class="track-time">${s}:${r}</span>
        <a class="track-link" target="_blank" href="${o.movie}">${o.movie?`<svg class="track-link-youtube">
            <use href="${ae}#youtube"></use>
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
  `}function pe({intDiedYear:e,intFormedYear:t,intMembers:n,strGender:o,strArtist:s,strArtistThumb:r,strBiographyEN:a,strCountry:i},c){const d=t||e?`      ${t??"last"}-${e??"present"}`:"information missing",p=`
   <p class="modal-biography__title">${s}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${r}" alt="${s}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${d}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${o}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${i}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${a}</span></p>
        <ul class="modal-biography__genre-list">${c}</ul>
        </div></div>`;I.innerHTML=p}const j="/project-okak/assets/no-image-aiJRBcV6.jpg",U=document.querySelector(".artists-block-list"),C=document.querySelector(".loader"),B=document.querySelector(".artists-load-more"),N=document.querySelector(".artists-silence-block");function me(){N.classList.remove("hidden")}function O(){N.classList.add("hidden")}function M(){U.innerHTML=""}function ge(){C.classList.remove("hidden")}function S(){C.classList.add("hidden")}function fe(){B.classList.remove("hidden")}function A(){B.classList.add("hidden")}function he(e){const t=e.map(({_id:n,strArtist:o,strBiographyEN:s,strArtistThumb:r,genres:a})=>`<div class="artist-block">
      <img class="artist-img" src="${r||j}" alt="${o}" loading="lazy" onerror="this.onerror=null; this.src='${j}';">
      ${ye(a)}
      <h5 class="artist-name">${g(o)}</h5>
      <p class="artist-description">${be(g(s),200)}</p>
      <button class="artist-learn-link" data-id="${n}">Learn More
        <svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use>
        </svg>
      </button>
    </div>`).join("");U.insertAdjacentHTML("beforeend",t)}function ye(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(n=>`<li class="artist-genres-item">${g(n)}</li>`).join("")}</ul>`}function g(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function be(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}function ve(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}const Le=document.querySelector(".filter-genre-dropbox");function ke(e){const t=e.map(({genre:n})=>`<input id="genre-${g(n)}" class="filter-genre-input" type="radio" name="genreGroup" value="${g(n)}" />
    <label for="genre-${g(n)}" class="filter-genre-label">${g(n)}</label>`).join("");Le.insertAdjacentHTML("beforeend",t)}const $=document.querySelector(".artists-filter-toggle"),G=document.querySelector(".artists-filter-form"),E=document.querySelector(".filter-sorting-toggle"),we=document.querySelector(".filter-sorting-dropbox"),q=document.querySelector(".filter-genre-toggle"),Se=document.querySelector(".filter-genre-dropbox");$.addEventListener("click",()=>{G.classList.toggle("open"),$.classList.toggle("open"),$.querySelector(".filter-toggle-icon").classList.toggle("rotate")});E.addEventListener("click",()=>{we.classList.toggle("open"),E.classList.toggle("open"),E.querySelector(".filter-sorting-icon").classList.toggle("rotate")});q.addEventListener("click",()=>{Se.classList.toggle("open"),q.classList.toggle("open"),q.querySelector(".filter-genre-icon").classList.toggle("rotate")});let _=document.querySelector(".filter-name-input"),R=document.getElementsByName("sortingGroup"),P=document.getElementsByName("genreGroup");function k(e){const t=Array.from(e).find(n=>n.checked);return t?t.value:""}const $e=document.querySelector(".artists-filter-reset"),Ee=document.querySelector(".artists-silence-button");function K(){_.value="",Array.from(R).forEach(e=>e.checked=e.id==="filter-default"),Array.from(P).forEach(e=>e.checked=!1),m=1,h=0,M(),O()}$e.addEventListener("click",async()=>{K(),await v({page:m})});Ee.addEventListener("click",async()=>{K(),await v({page:m})});async function v({name:e="",sortName:t="",genre:n="",page:o=1}={}){A(),ge(),O();try{const s=await Q({name:e,sortName:t,genre:n,currentPage:o});w=s.totalArtists,w===0?(l.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),S(),me()):(he(s.artists),h+=s.artists.length,S(),fe())}catch(s){l.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",s),S()}}let m=1,h=0,w=0;window.addEventListener("DOMContentLoaded",async()=>{m=1,h=0,M(),await v({page:m});const e=await W();e.length>0&&ke(e)});B.addEventListener("click",async()=>{m+=1,await v({name:_.value,sortName:k(R),genre:k(P),page:m}),ve(),h>=w&&(A(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))});G.addEventListener("change",async e=>{m=1,h=0,M(),await v({name:_.value,sortName:k(R),genre:k(P),page:m}),h>=w&&A()});let b=null;function qe(e){b=function(t){t.key==="Escape"&&e.close()},document.addEventListener("keydown",b)}function Be(){b&&(document.removeEventListener("keydown",b),b=null)}document.querySelector(".feedback-container").addEventListener("click",async e=>{if(e.target.id==="leaveFeedbackBtn"||e.target.closest("#leaveFeedbackBtn")){const t=document.getElementById("feedbackModalTemplate").innerHTML,n=J.create(t,{onShow:()=>{document.body.classList.add("modal-open"),qe(n)},onClose:()=>{document.body.classList.remove("modal-open"),Be()}});n.show(),setTimeout(()=>{const o=n.element(),s=o.querySelector("#closeModalBtn");s&&(s.onclick=()=>n.close());const r=o.querySelectorAll('input[type="radio"][name="rating"]'),a=o.querySelector("#ratingValue"),i=o.querySelector("#feedbackForm");r.forEach(c=>{c.addEventListener("change",()=>{a.value=c.value})}),i.addEventListener("submit",async c=>{if(c.preventDefault(),i.classList.remove("was-validated"),!i.checkValidity()){i.classList.add("was-validated"),l.error({message:"Please fill in all required fields.",position:"topRight"});return}const d=i.name.value.trim(),p=i.descr.value.trim(),u=parseFloat(a.value);if(!u||u<=0){l.error({message:"Please select a rating.",position:"topRight"});return}try{const f=await ee(d,u,p);f&&(l.success({message:f.message||"Thanks for your feedback!",position:"topRight"}),n.close())}catch(f){l.error({message:`Error sending review. Try again later.
${f.message||f}`,position:"topRight"})}})},0)}});
//# sourceMappingURL=index.js.map
