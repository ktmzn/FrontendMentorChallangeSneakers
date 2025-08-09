let currentImageHints = document.getElementById('image-lightbox-current');
const thumbnailsHints = [
  document.getElementById('hint-1'),
  document.getElementById('hint-2'),
  document.getElementById('hint-3'),
  document.getElementById('hint-4'),
];

const imagesHints = [
  [ //big images
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
  ],
  [ //small images
    'images/image-product-1-thumbnail.jpg',
    'images/image-product-2-thumbnail.jpg',
    'images/image-product-3-thumbnail.jpg',
    'images/image-product-4-thumbnail.jpg'
  ]
];

let currentIndexHints = 0;

const applyActiveStyleHints = (image) => {
  image.style.filter = 'brightness(70%)';
  // image.style.borderRadius = '1rem';
  borderRaduisAdaptive(image);
  image.style.border = '2px solid var(--color-orange)';
};

const resetStyleHints = (image) => {
  image.style.filter = 'brightness(100%)';
  image.style.opacity = '1';
  image.style.border = '0';
}

const showBigImageHints = (index) => {
  // Update current image

  //изменяем src большой картинки на ту, которую хотим показать
  currentImageHints.src = imagesHints[0][index]; 
  //присваиваем текущему индексу индекс желаемой картинку
  currentIndexHints = index;
  
  // Update thumbnail styles
  thumbnailsHints.forEach((thumbnail, i) => {
    if (i === index) { //если src маленькой картинки равен желаемому, то меняем стиль маленькой картинки
      applyActiveStyleHints(thumbnail);
    } else { 
      // если src маленькой картинки на текущей итерации не равен желаемому, 
      // то сбрасываем стиль маленькой картинки(если надо)
      resetStyleHints(thumbnail);
    }
  });
};

// Add event listeners
thumbnailsHints.forEach((thumbnail, index) => { 
  //чтобы при клике на любую маленькую картинку у нее изменялись стили
  //и чтобы показывалась большая картинка
  thumbnail.addEventListener('click', () => showBigImageHints(index));
});

// Initialize with first image
showBigImageHints(0);