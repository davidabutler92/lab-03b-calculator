import {addClickHandler, subClickHandler, multClickHandler, divClickHandler} from './clickHandler.js';

const addButton = document.getElementById('add-btn');
const subButton = document.getElementById('sub-btn');
const multButton = document.getElementById('mult-btn');
const divButton = document.getElementById('div-btn');

addButton.addEventListener('click', addClickHandler);
subButton.addEventListener('click', subClickHandler);
multButton.addEventListener('click', multClickHandler);
divButton.addEventListener('click', divClickHandler);
