const addBtn = document.querySelector('.button__add');
const container = document.querySelector('.shopping-cart__products');
//const productContainer = document.querySelector('.products__container');
let amount = parseInt(document.querySelector('.price__amount').textContent);
let cost = parseInt(document.querySelector('.price__all').textContent.slice(2));


let counterNumber;
const price = parseInt(document.querySelector('.feature__price-current').textContent.slice(1));
const emptyCartText = document.querySelector('.empty-cart');

addBtn.addEventListener('click', function(){
  counterNumber = parseInt(document.getElementById('counter').textContent);
  if(counterNumber!=0){
    clearCart();
    amount +=counterNumber;
    cost = amount*price;
    renderProducts();
  }

  document.getElementById('counter').textContent = 1;
});

function renderProducts() {
  if(document.querySelector('.products__container').classList.contains('d-none')){
    document.querySelector('.products__container').classList.remove('d-none');
  }
  document.querySelector('.price__amount').textContent = amount;
  document.querySelector('.price__all').textContent = `$${cost.toFixed(2)}`;
}

function deleteFromCart(){
  amount = 0;
  document.querySelector('.products__container').classList.add('d-none');
  emptyCartText.classList.remove('d-none');
  shoppingCartProductsEmptyPaddingAdaptive(container);
}

function clearCart(){
  emptyCartText.classList.add('d-none');
  shoppingCartProductsPaddingAdaptive(container);
}