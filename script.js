const resultArea = document.querySelector("#result");
const buttonsArea = document.querySelector("#buttons");
const operatorBtns = document.querySelectorAll(".operators");

let firsNum = 0;
let secondNum = 0;
let operator;
let displayValue = "";

function display(button) {
  let target = button.target.innerText;
  displayValue += target;
  resultArea.textContent = displayValue;
  if (target === "C") {
    resultArea.textContent = "0";
    displayValue = "";
  }
}

const add = function () {};

const subtract = function () {};

const multiply = function () {};

const divide = function () {};

const operate = function (num1, operator, num2) {};

buttonsArea.addEventListener("click", display);

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "+":
        operator = add;
        console.log(operator);
        break;
      case "-":
        operator = subtract;
        console.log(operator);
        break;
      case "*":
        operator = multiply;
        console.log(operator);
        break;
      case "/":
        operator = divide;
        console.log(operator);
        break;
      case "=":
        operator = operate;
        console.log(operator(1, 2, 3));
        break;
    }
  });
});

console.log(firsNum);
console.log(secondNum);
