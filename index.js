import{a as b,i as l,S as W,e as j,d as Y,b as Q}from"./assets/vendor-CFlek-mx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();async function X(){try{const o="https://sound-wave.b.goit.study/api"+"/genres";return(await b.get(o)).data}catch(e){return l.error({message:`${e}`,position:"topRight"}),null}}async function Z({currentPage:e=1,name:t="",sortName:o="",genre:n=""}={}){try{const a="https://sound-wave.b.goit.study/api"+"/artists",i={limit:8,page:e,...t&&{name:t},...o&&{sortName:o},...n&&{genre:n}};return(await b.get(a,{params:i})).data}catch(s){return l.error({message:`${s}`,position:"topRight"}),null}}async function ee(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",o=`/artists/${e}`,n=t+o;return(await b.get(n)).data}catch(t){return l.error({message:`${t}`,position:"topRight"}),null}}async function te(e="65ada227af9f6d155db46908"){try{const t="https://sound-wave.b.goit.study/api",o=`/artists/${e}/albums`,n=t+o;return(await b.get(n)).data}catch(t){return l.error({message:`${t}`,position:"topRight"}),null}}async function se(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",s={limit:12,page:Math.floor(Math.random()*11)+1};return(await b.get(o,{params:s})).data}catch(e){return l.error({message:`${e}`,position:"topRight"}),null}}async function oe(e,t,o){try{const r="https://sound-wave.b.goit.study/api"+"/feedbacks",a={name:e,rating:t,descr:o},i=await b.post(r,a);return console.log(a),i.data}catch(n){return l.error({message:`${n}`,position:"topRight"}),null}}const w="/project-okak/icons.svg";function ne(e){const t=e.map(({_id:s,name:r,rating:a,descr:i})=>{const c=Math.round(a*2)/2,d=Array.from({length:5}).map((p,u)=>{const J=Math.min(Math.max(c-u,0),1)*100;return`
      <span class="star-container" style="position: relative; width: 20px; height: 20px; display: inline-block;">
        <svg class="star star--empty" width="20" height="20" style="position: absolute; top: 0; left: 0;">
          <use href="${w}#star" fill="#fff"></use>
        </svg>
        <div class="star-fill-wrapper" style="width: ${J}%; height: 20px; overflow: hidden; position: absolute; top: 0; left: 0;">
          <svg class="star star--filled" width="20" height="20">
            <use href="${w}#star" fill="#764191"></use>
          </svg>
        </div>
      </span>`}).join("");return`
      <div class="swiper-slide" data-id="${s}">
        <div class="star-rating">${d}</div>
        <p class="feedback-descr">${i}</p>
        <p class="feedback-name">${r}</p>
      </div>`}).join(""),o=`
    <div class="swiper modal-product__slider">
      <div class="custom-swiper-button-prev">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${w}#icon-left-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-wrapper">
        ${t}
      </div>
      <div class="custom-swiper-button-next">
        <svg class="swiper-nav-icon" width="24" height="24">
          <use href="${w}#icon-right-arrow-alt"></use>
        </svg>
      </div>
      <div class="swiper-pagination custom-pagination"></div>
    </div>
    <div class="btn-container">
        <button class="feedback-btn" id="leaveFeedbackBtn">Leave feedback</button>
    </div>
  `,n=document.querySelector(".feedback-container");n.innerHTML=o,new W(".modal-product__slider",{speed:1e3,slidesPerView:1,spaceBetween:10,navigation:{nextEl:".custom-swiper-button-next",prevEl:".custom-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!1,renderBullet:function(s,r){return s<3?`<span class="${r}" data-bullet="${s}"></span>`:""}},on:{slideChange:function(s){const r=document.querySelectorAll(".swiper-pagination span");r.forEach(p=>p.classList.remove("swiper-pagination-bullet-active"));const a=s.activeIndex,i=s.slides.length;a===0?r[0].classList.add("swiper-pagination-bullet-active"):a===i-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active");const c=document.querySelector(".custom-swiper-button-prev"),d=document.querySelector(".custom-swiper-button-next");c.classList.toggle("disabled",a===0),d.classList.toggle("disabled",a===i-1)}},autoplay:{delay:5e3},keyboard:{enabled:!0,onlyInViewport:!0}})}async function re(){try{const e=await se();if(e&&e.data){const t=[...e.data].sort(()=>Math.random()-.5);ne(t)}else console.warn("No feedbacks found or wrong format:",e)}catch(e){console.error("Failed to load feedbacks:",e)}}re();const ae=document.querySelectorAll("section[id]"),ie=document.querySelectorAll(".nav-menu-link"),ce=document.querySelector(".header"),H=ce.offsetHeight,I=100;window.addEventListener("scroll",()=>{let e=null;ae.forEach(t=>{const o=t.getBoundingClientRect(),n=t.getAttribute("id");o.top<=H+I&&o.bottom>H+I&&(e=n)}),ie.forEach(t=>{t.getAttribute("href").replace("#","")===e?t.classList.add("active"):t.classList.remove("active")})});(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const s=e.querySelectorAll('a[href*="#"]'),r=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open"),r?(j(document.body),s.forEach(a=>{a.removeEventListener("click",n)})):(Y(document.body),s.forEach(a=>{a.addEventListener("click",n)}))};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 767px)").addEventListener("change",s=>{s.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),j(document.body))})})();const le="/project-okak/assets/icons-Er7r_hNm.svg",de=document.querySelector(".artists-block-list"),C=document.querySelector(".modal-albums"),N=document.querySelector(".modal-biography");de.addEventListener("click",ue);async function ue(e){if(e.target.className!=="artist-learn-link")return;const t=e.target.dataset.id,o=e.target.parentElement.children[1].innerHTML;pe(t,o)}async function pe(e,t){const o=document.querySelector(".artist-modal-backdrop"),n=document.querySelector(".modal-close-btn"),s=document.querySelector(".artist-modal-backdrop"),r=document.querySelector(".modal-loader");o.classList.remove("is-hidden"),r.classList.remove("is-hidden"),document.body.style.overflow="hidden",n.addEventListener("click",c),s.addEventListener("click",d),document.addEventListener("keydown",p);const a=await ee(e),i=await te(e);r.classList.add("is-hidden"),C.innerHTML="",N.innerHTML="",fe(a,t),me(i.albumsList);function c(){o.classList.add("is-hidden"),document.body.style.overflow="",n.removeEventListener("click",c),s.removeEventListener("click",d),document.removeEventListener("keydown",p)}function d(u){u.target===u.currentTarget&&c()}function p(u){u.key==="Escape"&&c()}}function me(e){C.innerHTML=e.map(t=>ge(t)).join("")}function ge(e){const t=e.tracks.map(n=>{const s=Math.floor(n.intDuration/6e4),r=Math.floor(n.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${n.strTrack}</span>
        <span class="track-time">${s}:${r}</span>
        <a class="track-link" target="_blank" rel="noopener noreferrer" href="${n.movie}">${n.movie?`<svg class="track-link-youtube">
            <use href="${le}#youtube"></use>
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
  `}function fe({intDiedYear:e,intFormedYear:t,intMembers:o,strGender:n,strArtist:s,strArtistThumb:r,strBiographyEN:a,strCountry:i},c){const d=t||e?`      ${t??"last"}-${e??"present"}`:"information missing",p=`
   <p class="modal-biography__title">${s}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${r}" alt="${s}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${d}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${n}</span></p>
        <p class="modal-biography___members">Members</br> <span>${o}</span></p>
        <p class="modal-biography___country">Country</br> <span>${i}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${a}</span></p>
        <ul class="modal-biography__genre-list">${c}</ul>
        </div></div>`;N.innerHTML=p}const U="/project-okak/assets/no-image-aiJRBcV6.jpg",O=document.querySelector(".artists-block-list"),G=document.querySelector(".loader"),M=document.querySelector(".artists-load-more"),V=document.querySelector(".artists-silence-block");function he(){V.classList.remove("hidden")}function K(){V.classList.add("hidden")}function A(){O.innerHTML=""}function ye(){G.classList.remove("hidden")}function $(){G.classList.add("hidden")}function ve(){M.classList.remove("hidden")}function _(){M.classList.add("hidden")}function be(e){const t=e.map(({_id:o,strArtist:n,strBiographyEN:s,strArtistThumb:r,genres:a})=>`<div class="artist-block">
      <img class="artist-img" src="${r||U}" alt="${n}" loading="lazy" onerror="this.onerror=null; this.src='${U}';">
      ${Le(a)}
      <h5 class="artist-name">${g(n)}</h5>
      <p class="artist-description">${ke(g(s),200)}</p>
      <button class="artist-learn-link" data-id="${o}">Learn More
        <svg class="artist-link-icon" width="24" height="24">
          <use href="./icons.svg#arrow-right"></use>
        </svg>
      </button>
    </div>`).join("");O.insertAdjacentHTML("beforeend",t)}function Le(e=[]){return!Array.isArray(e)||e.length===0?"":`<ul class="artist-genres-list">${e.map(o=>`<li class="artist-genres-item">${g(o)}</li>`).join("")}</ul>`}function g(e=""){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function ke(e,t){return e?e.length>t?e.slice(0,t)+"…":e:""}function we(){const e=document.querySelector(".artist-block");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}const Se=document.querySelector(".filter-genre-dropbox");function Ee(e){const t=e.map(({genre:o})=>`<input id="genre-${g(o)}" class="filter-genre-input" type="radio" name="genreGroup" value="${g(o)}" />
    <label for="genre-${g(o)}" class="filter-genre-label">${g(o)}</label>`).join("");Se.insertAdjacentHTML("beforeend",t)}const q=document.querySelector(".artists-filter-toggle"),D=document.querySelector(".artists-filter-form"),f=document.querySelector(".filter-sorting-toggle"),P=document.querySelector(".filter-sorting-dropbox"),h=document.querySelector(".filter-genre-toggle"),R=document.querySelector(".filter-genre-dropbox");q.addEventListener("click",()=>{R.classList.remove("open"),h.classList.remove("open"),h.querySelector(".filter-genre-icon").classList.remove("rotate"),P.classList.remove("open"),f.classList.remove("open"),f.querySelector(".filter-sorting-icon").classList.remove("rotate"),D.classList.toggle("open"),q.classList.toggle("open"),q.querySelector(".filter-toggle-icon").classList.toggle("rotate")});f.addEventListener("click",()=>{R.classList.remove("open"),h.classList.remove("open"),h.querySelector(".filter-genre-icon").classList.remove("rotate"),P.classList.toggle("open"),f.classList.toggle("open"),f.querySelector(".filter-sorting-icon").classList.toggle("rotate")});h.addEventListener("click",()=>{P.classList.remove("open"),f.classList.remove("open"),f.querySelector(".filter-sorting-icon").classList.remove("rotate"),R.classList.toggle("open"),h.classList.toggle("open"),h.querySelector(".filter-genre-icon").classList.toggle("rotate")});let T=document.querySelector(".filter-name-input"),x=document.getElementsByName("sortingGroup"),F=document.getElementsByName("genreGroup");function S(e){const t=Array.from(e).find(o=>o.checked);return t?t.value:""}const $e=document.querySelector(".artists-filter-reset"),qe=document.querySelector(".artists-silence-button");function z(){T.value="",Array.from(x).forEach(e=>e.checked=e.id==="filter-default"),Array.from(F).forEach(e=>e.checked=!1),m=1,v=0,A(),K()}$e.addEventListener("click",async()=>{z(),await k({page:m})});qe.addEventListener("click",async()=>{z(),await k({page:m})});async function k({name:e="",sortName:t="",genre:o="",page:n=1}={}){_(),ye(),K();try{const s=await Z({name:e,sortName:t,genre:o,currentPage:n});E=s.totalArtists,E===0?(l.info({message:"Sorry, there are no Artists matching your search query. Please try again!",messageColor:"#fff",position:"topRight",messageSize:"16px",backgroundColor:"#EF4040"}),$(),he()):(be(s.artists),v+=s.artists.length,$(),ve())}catch(s){l.error({message:"Error loading Artists.",position:"topRight",backgroundColor:"#EF4040"}),console.log("Error: ",s),$()}}let m=1,v=0,E=0;window.addEventListener("DOMContentLoaded",async()=>{m=1,v=0,A(),await k({page:m});const e=await X();e.length>0&&Ee(e)});M.addEventListener("click",async()=>{m+=1,await k({name:T.value,sortName:S(x),genre:S(F),page:m}),we(),v>=E&&(_(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))});D.addEventListener("change",async e=>{m=1,v=0,A(),await k({name:T.value,sortName:S(x),genre:S(F),page:m}),v>=E&&_()});let L=null;function Be(e){L=function(t){t.key==="Escape"&&e.close()},document.addEventListener("keydown",L)}function Me(){L&&(document.removeEventListener("keydown",L),L=null)}document.querySelector(".feedback-container").addEventListener("click",async e=>{if(e.target.id==="leaveFeedbackBtn"||e.target.closest("#leaveFeedbackBtn")){const t=document.getElementById("feedbackModalTemplate").innerHTML,o=Q.create(t,{onShow:()=>{document.body.classList.add("modal-open"),Be(o)},onClose:()=>{document.body.classList.remove("modal-open"),Me()}});o.show(),setTimeout(()=>{const n=o.element(),s=n.querySelector("#closeModalBtn");s&&(s.onclick=()=>o.close());const r=n.querySelectorAll('input[type="radio"][name="rating"]'),a=n.querySelector("#ratingValue"),i=n.querySelector("#feedbackForm");r.forEach(c=>{c.addEventListener("change",()=>{a.value=c.value})}),i.addEventListener("submit",async c=>{if(c.preventDefault(),i.classList.remove("was-validated"),!i.checkValidity()){i.classList.add("was-validated"),l.error({message:"Please fill in all required fields.",position:"topRight"});return}const d=i.name.value.trim(),p=i.descr.value.trim(),u=parseFloat(a.value);if(!u||u<=0){l.error({message:"Please select a rating.",position:"topRight"});return}try{const y=await oe(d,u,p);y&&(l.success({message:y.message||"Thanks for your feedback!",position:"topRight"}),o.close())}catch(y){l.error({message:`Error sending review. Try again later.
${y.message||y}`,position:"topRight"})}})},0)}});const B=document.querySelector(".scroll-to-top");B.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY>200?B.style.display="block":B.style.display="none"});
//# sourceMappingURL=index.js.map
