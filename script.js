const resultArea = document.querySelector("#result");
const numberArea = document.querySelector("#numbers");
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

numberArea.addEventListener("click", display);

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "+":
        operator = add;
        firsNum += parseInt(displayValue);
        console.log(operator);
        console.log(`firsNum: ${firsNum}, secondNum: ${secondNum}`);
        break;
      case "-":
        operator = subtract;
        console.log(operator);
        console.log(`firsNum: ${firsNum}, secondNum: ${secondNum}`);
        break;
      case "*":
        operator = multiply;
        console.log(operator);
        console.log(`firsNum: ${firsNum}, secondNum: ${secondNum}`);
        break;
      case "/":
        operator = divide;
        console.log(operator);
        console.log(`firsNum: ${firsNum}, secondNum: ${secondNum}`);
        break;
      case "=":
        operator = operate;
        console.log(operator);
        console.log(`firsNum: ${firsNum}, secondNum: ${secondNum}`);
        break;
    }
  });
});

console.log(firsNum);
console.log(secondNum);
