// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert('The result of function add: ' + add(number1, number2) + '.' +
  ' The result of function subtract: ' + subtract(number1, number2) + '.' +
  ' The result of function multiply: ' + multiply(number1, number2) + '.' +
  ' The result of function divide: ' + divide(number1, number2) + '.'
);
