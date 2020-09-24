const addInput1 = document.getElementById('input-1');
const addInput2 = document.getElementById('input-2');
const addButton = document.getElementById('add-btn');
const addResults = document.getElementById('add-results');

addButton.addEventListener('click', () => {
 const value1 = addInput1.value;
 const value2 = addInput1.value;
 const value1AsNumber = Number(value1);
 const value2AsNumber = Number(value1);
 const sum = value1AsNumber + value2AsNumber;
 addResults.textContent = sum;
});

console.log(addInput1, addInput2, addButton);