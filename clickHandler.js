import {add, subtract} from './mathUtils.js';

//User input and DOM elements 
const addNum1 = document.getElementById('addInput-1');      
const addNum2 = document.getElementById('addInput-2');
const addTextResults = document.getElementById('add-results');

//Add click handler function
export const addClickHandler = () => {
  const addValue1 = addNum1.valueAsNumber;
  const addValue2 = addNum2.valueAsNumber;
  const sum = add(addValue1, addValue2);
  addTextResults.textContent = sum;
}

//User input and DOM elements 
const subNum1 = document.getElementById('subInput-1');
const subNum2 = document.getElementById('subInput-2');
const subTextResults = document.getElementById('sub-results');

export const subClickHandler = () => {
  const subValue1 = subNum1.valueAsNumber;
  const subValue2 = subNum2.valueAsNumber;
  const difference = subtract(subValue1, subValue2);
  subTextResults.textContent = difference;
}
