/* 'use strict'; */


const menuBtn = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.menu-container nav');
const closeMenuBtn = document.querySelector('.fa-circle-xmark');

menuBtn.addEventListener('click', function() {
   mobileMenu.style.display = "block";
   mobileMenu.className = ".mobile-menu";
});

closeMenuBtn.addEventListener('click', ()=>{
  mobileMenu.style.display = "none";
} );