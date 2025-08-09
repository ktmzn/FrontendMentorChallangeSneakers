const imgBtn = document.querySelector('.cards__current');
const bodyElem = document.querySelector('body');
const wrapperElem = document.querySelector('.wrapper');
const lightbox = document.querySelector('.enlarged');
const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.enlarged__cross');

imgBtn.addEventListener('click', function showHint(){
  overlay.classList.add('d-block');
  lightbox.classList.add('d-block');
});

closeBtn.addEventListener('click', function closeLightbox(){
  overlay.classList.add('d-none');
  lightbox.classList.add('d-none');
}); 