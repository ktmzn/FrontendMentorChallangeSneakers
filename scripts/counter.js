const btnMinus = document.getElementById('minus-button');
const btnPlus = document.getElementById('plus-button');

let counter = document.getElementById('counter');

btnMinus.addEventListener('click', function(){
  if(parseInt(counter.innerText)>1){
    counter.innerText = --counter.innerText;
  }
});

btnPlus.addEventListener('click', function(){
  counter.innerText = ++counter.innerText;
});
