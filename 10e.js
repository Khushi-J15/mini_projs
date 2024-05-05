function subscribe(){
  const buttonElement = document.querySelector('.js-button');

  // check the difference between innerHTML and innerText
  if(buttonElement.innerText === 'Subscribe'){ //here try replacing
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  }
  else{
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function handleCostKeydown(event){
  if(event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100; // takes out the text from input box into js
  // console.log(cost);

  let message =  document.querySelector('.js-message');

  if(cost <= 0){

    message.innerHTML = 'Error: cost cannot be less than or equal to $0 ';
    return;
  }
  
  if(cost < 4000){
    cost = cost + 1000;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost/100}`;

  message.innerHTML = ''; // on entering new value the error message should be removed.
}