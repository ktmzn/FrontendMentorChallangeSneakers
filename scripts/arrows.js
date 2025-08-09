const rightArrow = document.querySelector('.enlarged__right-arrow'); //get right arrow
const leftArrow = document.querySelector('.enlarged__left-arrow'); //get left arrow
let imgHintCurrent = document.getElementById('image-lightbox-current');//get big(currrent) image

rightArrow.addEventListener('click', () => {
  const newIndex = (currentIndexHints + 1) % thumbnailsHints.length; 
  showBigImageHints(newIndex);
});

leftArrow.addEventListener('click', () => {
  const newIndex = (currentIndexHints - 1 + thumbnailsHints.length) % thumbnailsHints.length;
  showBigImageHints(newIndex);
});

