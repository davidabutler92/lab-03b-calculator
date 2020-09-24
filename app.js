//GET
const addNum1 = document.getElementById('addInput-1');
const addNum2 = document.getElementById('addInput-2');
const addButton = document.getElementById('add-btn');
const addTextResults = document.getElementById('add-results');

const subNum1 = document.getElementById('subInput-1');
const subNum2 = document.getElementById('subInput-2');
const subButton = document.getElementById('sub-btn');
const subTextResults = document.getElementById('sub-results');

const multNum1 = document.getElementById('multInput-1');
const multNum2 = document.getElementById('multInput-2');
const multButton = document.getElementById('mult-btn');
const multTextResults = document.getElementById('mult-results');

//calculator functions 
const add = (num1, num2) => {
  let add = num1 + num2;
  return  add;
}

const subtract = (num1, num2) => {
  let sub = num1 - num2;
  return  sub;
}

const multiply = (num1, num2) => {
  let mult = num1 * num2;
  return  mult;
}

//SET
addButton.addEventListener('click', () => {
  const results = add(addNum1.valueAsNumber, addNum2.valueAsNumber);
  addTextResults.textContent = results;
  console.log(results);
});

subButton.addEventListener('click', () => {
  const results = subtract(subNum1.valueAsNumber, subNum2.valueAsNumber);
  subTextResults.textContent = results;
  console.log(results);
});

multButton.addEventListener('click', () => {
  const results = multiply(multNum1.valueAsNumber, multNum2.valueAsNumber);
  multTextResults.textContent = results;
  console.log(results);
});