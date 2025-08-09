const burgerMenuBtn = document.getElementById('burger-menu-button');
const burgerMenuCloseBtn = document.getElementById('burger-menu-close');

burgerMenuBtn.addEventListener('click', function() {
  burgerMenuBtn.classList.add('d-none');
  burgerMenuCloseBtn.classList.remove('d-none');
  overlay.classList.add('d-block');
  overlay.classList.add('bg-white');
  document.querySelector('.header__nav').classList.add('d-flex');
});

burgerMenuCloseBtn.addEventListener('click', function() {
  burgerMenuCloseBtn.classList.add('d-none');
  burgerMenuBtn.classList.remove('d-none');
  overlay.classList.remove('d-block');
  overlay.classList.remove('bg-white');
  document.querySelector('.header__nav').classList.remove('d-flex');
})