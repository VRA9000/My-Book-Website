/* 'use strict'; */


const menuBtn = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.menu-container nav');
const closeMenuBtn = document.querySelector('.fa-circle-xmark');



menuBtn.addEventListener('click', function () {
  mobileMenu.style.display = "block";
  mobileMenu.className = ".mobile-menu";
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = "none";
});




/* window.addEventListener("load", init); */
function init(){
  const img = document.querySelectorAll('.gallery img');
  for(let i = 0; i < img.length; i++){
    img[i].addEventListener('click', () => {
      getImage(this)
    })
  }
   
}


function getImage(el) {

  
  const imageHolder = document.createElement('img');
  const backdropShadow = document.createElement('div');


  imageHolder.src = el.src;
  imageHolder.className = "image-holer";
  backdropShadow.className = "backdrop-shadow";

  backdropShadow.onclick = () => {
    document.body.removeChild(backdropShadow);
  }

  document.body.appendChild(backdropShadow);
  backdropShadow.appendChild(imageHolder);

}