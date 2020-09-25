import {addClickHandler, subClickHandler, multClickHandler, divClickHandler} from './clickHandler.js';

const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const multButton = document.getElementById('mult-btn');
const divButton = document.getElementById('div-btn');

addButton.addEventListener('click', addClickHandler);
subButton.addEventListener('click', subClickHandler);
multButton.addEventListener('click', multClickHandler);
divButton.addEventListener('click', divClickHandler);










// subButton.addEventListener('click', () => {
//   const results = subtract(subNum1.valueAsNumber, subNum2.valueAsNumber);
//   subTextResults.textContent = results;
//   console.log(results);
// });

// multButton.addEventListener('click', () => {
//   const results = multiply(multNum1.valueAsNumber, multNum2.valueAsNumber);
//   multTextResults.textContent = results;
//   console.log(results);
// });

// const subNum1 = document.getElementById('subInput-1');
// const subNum2 = document.getElementById('subInput-2');
// const subTextResults = document.getElementById('sub-results');
// 

// 
