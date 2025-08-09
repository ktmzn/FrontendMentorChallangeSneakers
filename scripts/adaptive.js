const borderRaduisAdaptive = (elem) => {
  if(window.innerWidth>=800){
    elem.style.borderRadius = '1rem';
  }else if(window.innerWidth<=799 && window.innerWidth>=500){
    elem.style.borderRadius = '0.5rem';
  }
}

const shoppingCartProductsPaddingAdaptive = (elem) => {
  if(window.innerWidth>=1000){
    elem.style.padding = '2rem';
  }else if(window.innerWidth<=999 && window.innerWidth>=801){
    elem.style.padding = '1rem';
    console.log('shopping cart 1rem');
  } else if(window.innerWidth<=800 && window.innerWidth>=500){
    elem.style.padding = '0.5rem';
  } else if(window.innerWidth<=499){
    elem.style.padding = '2rem';
  }
}

const shoppingCartProductsEmptyPaddingAdaptive = (elem) => {
if(window.innerWidth>=1000){
    elem.style.padding = '4rem 3rem';
  }else if(window.innerWidth<=999 && window.innerWidth>=801){
    elem.style.padding = '2rem';
  } else if(window.innerWidth<=800 && window.innerWidth>=500){
    elem.style.padding = '1rem';
  }  else if(window.innerWidth<=499){
    elem.style.padding = '5rem 1rem';
  }
}
