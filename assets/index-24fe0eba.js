(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const c=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".mobile-link-close"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",e),l.addEventListener("click",e),o.forEach(t=>t.addEventListener("click",e)),window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(c.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const c=document.querySelector(".v-menu-container"),n=document.querySelector(".v-open-menu"),l=document.querySelector(".v-close-menu"),o=document.querySelectorAll(".v-mobile-link-close"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("is-hidden");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",e),l.addEventListener("click",e),o.forEach(t=>t.addEventListener("click",e))})();new Swiper(".swiperProduct-modal",{slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3}},pagination:{el:".swiper-paginat",clickable:!0}});(()=>{const c=document.querySelector(".s-menu-container"),n=document.querySelector(".s-open-menu"),l=document.querySelector(".s-close-menu"),o=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),c.classList.toggle("is-hidden-s");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};n.addEventListener("click",o),l.addEventListener("click",o)})();new Swiper(".swiperProduct",{slidesPerView:"auto",spaceBetween:18,pagination:{el:".swiper-pagination",clickable:!0}});new Swiper(".swiperReviews",{slidesPerView:"auto",spaceBetween:16,breakpoints:{1200:{spaceBetween:28}},pagination:{el:".swiper-pagin",clickable:!0}});(()=>{const c=document.querySelector(".sbc-menu-container"),n=document.querySelector(".sbc-open-menu"),l=document.querySelector(".sbc-close-menu"),o=document.querySelectorAll(".sbc-btn-close-menu"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("sbc-is-hidden");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",e),l.addEventListener("click",e),o.forEach(t=>t.addEventListener("click",e))})();(()=>{const c=document.querySelector(".review-menu-container"),n=document.querySelector(".review-open-menu"),l=document.querySelector(".review-close-menu"),o=document.querySelectorAll(".review-mobile-link-close"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("review-is-hidden");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",e),l.addEventListener("click",e),o.forEach(t=>t.addEventListener("click",e))})();(()=>{const c=document.querySelector(".popup-menu-container"),n=document.querySelector(".popup-open-menu"),l=document.querySelector(".popup-close-menu"),o=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),c.classList.toggle("popup-is-hidden");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};n.addEventListener("click",o),l.addEventListener("click",o)})();
