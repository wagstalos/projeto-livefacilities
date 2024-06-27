"use strict";var _Swiper;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,i){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0===i)return("string"===t?String:Number)(e);i=i.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}function menuMobile(){var e=$(".dots"),t=$(".menu-mobile"),i=$(".icon-tabler-x"),n=$(".menu-mobile__links a");e.on("click",function(){t.slideDown(),i.css("display","block")}),i.on("click",function(){t.slideUp(),i.css("display","none")}),n.on("click",function(){t.slideUp(),i.css("display","none")})}menuMobile(),$(window).on("load",function(){$("body").removeClass("loading")}),$(document).ready(function(){AOS.init(),$(".accordion-wrap").on("click",function(){$(this).children().eq(1).slideToggle(300),$(this).children().eq(0).toggleClass("accordion-no-bar"),$(this).siblings().find(".accordion-header").removeClass("accordion-gold"),$(this).siblings().find(".accordion-header .icon").removeClass("rotate-fa"),$(this).find(".accordion-header").toggleClass("accordion-gold"),$(this).find(".icon").toggleClass("rotate-fa"),$(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300)}),document.querySelectorAll('a[href^="#"]').forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var e=t.getAttribute("href").substring(1),e=document.getElementById(e);e&&(e=e.getBoundingClientRect().top+window.scrollY,window.scrollTo({top:e,behavior:"smooth"}))})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".lazy-image-background").forEach(function(e){var t=e.getAttribute("data-bg");e.style.backgroundImage="url(".concat(t,")")})}),particlesJS("particles-js",{particles:{number:{value:29,density:{enable:!0,value_area:881.8766334760375}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:270,height:100}},opacity:{value:.37680183430339786,random:!1,anim:{enable:!1,speed:.3248308849205381,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:96.20472365193136,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1.603412060865523,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var swiper1=new Swiper(".mySwiper",(_defineProperty(_Swiper={spaceBetween:10,freeMode:!1,slidesPerView:1.1,loop:!1,navigation:!0,pagination:{el:".swiper-pagination",clickable:!1}},"navigation",{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),_defineProperty(_Swiper,"breakpoints",{600:{slidesPerView:2,spaceBetween:10},900:{slidesPerView:3,spaceBetween:10},1300:{slidesPerView:4,spaceBetween:10}}),_Swiper));