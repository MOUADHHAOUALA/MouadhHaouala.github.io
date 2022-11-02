"use strict";

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 30);

let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
  if (counter1 == 85) {
    clearInerval();
  } else {
    counter1 += 1;
    number1.innerHTML = counter1 + "%";
  }
}, 30);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 90) {
    clearInerval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
}, 30);
