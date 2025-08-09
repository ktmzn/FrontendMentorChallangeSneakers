# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/)

### What I learned
```html

```
```css
#burger-menu-close{
  filter: brightness(50%); /* to make image more gray */
}
.hints__elem{
  flex: 0 0 calc(25% - 10px);
  width: 100px;
}
```
```js
const borderRaduisAdaptive = (elem) => {
  if(window.innerWidth>=800){ /*get widow width*/
    elem.style.borderRadius = '1rem';
  }else if(window.innerWidth<=799 && window.innerWidth>=500){
    elem.style.borderRadius = '0.5rem';
  }
}
rightArrow.addEventListener('click', () => {
  const newIndex = (currentIndexHints + 1) % thumbnailsHints.length; //the remainder after division is the index of the picture 
  showBigImageHints(newIndex);
});
document.addEventListener('click', (event) => { 
  //close cart when we click anywhere but her
  if (!cartBtn.contains(event.target) && !cartProducts.contains(event.target)) {
    cartProducts.classList.add('d-none');
  }
});
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) - This helped me for making image blackout. I really liked this pattern and will use it going forward.
- [stackoverflow](https://ru.stackoverflow.com/questions/1418695/%D0%9A%D0%B0%D0%BA-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%82%D1%8C-div-%D0%BF%D1%80%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BA%D0%B5-%D0%B2-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%83%D1%8E-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%BD%D0%B5-%D1%8D%D1%82%D0%BE%D0%B3%D0%BE-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0) - This is an amazing article which helped me finally understand how to close cart when we click anywhere but her. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@ktmzn](https://www.frontendmentor.io/profile/ktmzn)
- Intagram [@k__mzn](https://www.instagram.com/k__mzn?igsh=ejJ3eWZ2Z29vbXB3)

