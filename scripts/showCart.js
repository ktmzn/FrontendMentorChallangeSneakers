const cartBtn = document.querySelector("#cart-button");
const cartProducts = document.querySelector('.shopping-cart__settings');

cartBtn.addEventListener('mouseover', function() {
  cartProducts.classList.remove('d-none');
  cartProducts.style.display = 'block';
});

document.addEventListener('click', (event) => { 
  if (!cartBtn.contains(event.target) && !cartProducts.contains(event.target)) {
    cartProducts.classList.add('d-none');
  }
});