import {add, subtract, multiply, divide} from './mathUtils.js';

//User input for add
const addNum1 = document.getElementById('addInput-1');      
const addNum2 = document.getElementById('addInput-2');
const addTextResults = document.getElementById('add-results');

//Addition click handler function
export const addClickHandler = () => {
  const addValue1 = addNum1.valueAsNumber;
  const addValue2 = addNum2.valueAsNumber;
  const sum = add(addValue1, addValue2);
  addTextResults.textContent = sum;
}

//User input for subtract
const subNum1 = document.getElementById('subInput-1');
const subNum2 = document.getElementById('subInput-2');
const subTextResults = document.getElementById('sub-results');

//Subtraction click handler
export const subClickHandler = () => {
  const subValue1 = subNum1.valueAsNumber;
  const subValue2 = subNum2.valueAsNumber;
  const difference = subtract(subValue1, subValue2);
  subTextResults.textContent = difference;
}

//User input for multiply 
const multNum1 = document.getElementById('multInput-1');
const multNum2 = document.getElementById('multInput-2');
const multTextResults = document.getElementById('mult-results');

//Multiply click handler
export const multClickHandler = () => {
  const multValue1 = multNum1.valueAsNumber;
  const multValue2 = multNum2.valueAsNumber;
  const product = multiply(multValue1, multValue2);
  multTextResults.textContent = product;
}

//User input for divide 
const divNum1 = document.getElementById('divInput-1');
const divNum2 = document.getElementById('divInput-2');
const divTextResults = document.getElementById('div-results');

//Division click handler
export const divClickHandler = () => {
  const divValue1 = divNum1.valueAsNumber;
  const divValue2 = divNum2.valueAsNumber;
  const quotient = divide(divValue1, divValue2);
  divTextResults.textContent = quotient;
}