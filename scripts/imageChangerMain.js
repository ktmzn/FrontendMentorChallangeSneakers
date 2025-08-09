let currentImage = document.getElementById('image-current');
const thumbnails = [
  document.querySelector('img[alt="image-product-1-thumbnail"]'),
  document.querySelector('img[alt="image-product-2-thumbnail"]'),
  document.querySelector('img[alt="image-product-3-thumbnail"]'),
  document.querySelector('img[alt="image-product-4-thumbnail"]')
];

const images = [
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

let currentIndex = 0;

const applyActiveStyle = (image) => {
  image.style.opacity = '0.5';
  // image.style.borderRadius = '1rem';
  borderRaduisAdaptive(image);
  image.style.border = '2px solid var(--color-orange)';
};

const resetStyle = (image) => {
  image.style.opacity = '1';
  image.style.border = '0';
}

const showBigImage = (index) => {
  // Update current image

  //изменяем src большой картинки на ту, которую хотим показать
  currentImage.src = images[0][index]; 
  //присваиваем текущему индексу индекс желаемой картинку
  currentIndex = index;
  
  // Update thumbnail styles
  thumbnails.forEach((thumbnail, i) => {
    if (i === index) { //если src маленькой картинки равен желаемому, то меняем стиль маленькой картинки
      applyActiveStyle(thumbnail);
    } else { 
      // если src маленькой картинки на текущей итерации не равен желаемому, 
      // то сбрасываем стиль маленькой картинки(если надо)
      resetStyle(thumbnail);
    }
  });
};

// Add event listeners
thumbnails.forEach((thumbnail, index) => { 
  //чтобы при клике на любую маленькую картинку у нее изменялись стили
  //и чтобы показывалась большая картинка
  thumbnail.addEventListener('click', () => showBigImage(index));
});

// Initialize with first image
showBigImage(0);