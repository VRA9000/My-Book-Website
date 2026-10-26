'use strict';


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
function init() {
  const img = document.querySelectorAll('.gallery img');
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
      getImage(this);
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

const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit_btn');

const fnameInputEl = document.querySelector('#fname_input');
const lnameInputEl = document.querySelector('#lname_input');
const emailInputEl = document.querySelector('#email_input');
const phoneInputEl = document.querySelector('#phone_input');
const textareaInputEl = document.querySelector('#textarea_input');

const fnameErrorEl = document.querySelector('#fname_error_message');
const lnameErrorEl = document.querySelector('#lname_error_message');
const emailErrorEl = document.querySelector('#email_error_message');
const phoneErrorEl = document.querySelector('#phone_error_message');
const textareaErrorEl = document.querySelector('#textarea_error_message');

const successMsg = document.querySelector('#success');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
     

  const formData = new FormData(form);
  formData.append("access_key", "bceb5772-dfcd-4111-93f1-0577315be8da");

  if (fnameInputEl.value == '') {
    fnameErrorEl.textContent = "Please enter your First Name";
    fnameErrorEl.className = "error";
    return;
  }
  else if (lnameInputEl.value == '') {
    lnameErrorEl.textContent = 'Please enter your Last Name';
    lnameErrorEl.className = 'error';
    return;

  }
  else if (emailInputEl.value == '') {
    emailErrorEl.textContent = 'Please enter your email';
    emailErrorEl.className = 'error';
    return;

  }
  else if (phoneInputEl.value == '') {
    phoneErrorEl.textContent = 'Please enter your phone number';
    phoneErrorEl.className = 'error';
    return;

  }
  else if (textareaInputEl.value == '') {
    textareaErrorEl.textContent = 'Please enter a message';
    textareaErrorEl.className = 'error';
    return;

  }
  else {
    fnameErrorEl.textContent = '';
    lnameInputEl.textContent = '';
    emailInputEl.textContent = '';
    phoneInputEl.textContent = '';
    textareaInputEl.textContent = '';

    successMsg.className = 'success';
    successMsg.textContent = 'Your message sent successfully!';

   form.reset();

  }


})
