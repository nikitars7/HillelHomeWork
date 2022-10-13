"use strict";
let homeWork = document.querySelector('.homework__text');

const name = prompt("What's your name?", "");
alert(`Hello , ${name} ! How are you?`);

if (name === '') {
   homeWork.innerHTML = "Безымянный)";
} else {
   homeWork.innerHTML = `${name}`;
}

