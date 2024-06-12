const resultArea = document.querySelector("#result");
const numberArea = document.querySelector("#numbers");
const operatorArea = document.querySelector("#operators");
const specialArea = document.querySelector("#specials");

let firsNum = 0;
let secondNum = 0;
let operator = null;
let displayValue = "";

function display(button) {
  let target = button.target.innerText;
  displayValue += target;
  resultArea.textContent = displayValue;
}

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num2 !== 0 ? num1 / num2 : "ERROR!";
};

const operate = function (num1, operator, num2) {
  return operator(num1, num2);
};

numberArea.addEventListener("click", display);

operatorArea.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.innerText) {
    case "+":
      operator = add;
      firsNum += parseInt(displayValue);
      resultArea.textContent = firsNum;
      displayValue = "";
      break;
    case "-":
      operator = subtract;
      firsNum = parseInt(displayValue);
      resultArea.textContent = firsNum;
      displayValue = "";
      break;
    case "*":
      operator = multiply;
      firsNum = parseInt(displayValue);
      resultArea.textContent = firsNum;
      displayValue = "";
      break;
    case "/":
      operator = divide;
      firsNum = parseInt(displayValue);
      resultArea.textContent = firsNum;
      displayValue = "";
      break;
    case "=":
      if (operator !== null) {
        secondNum += parseInt(displayValue);
        resultArea.textContent = operate(firsNum, operator, secondNum);
      }
      break;
  }
});

specialArea.addEventListener("click", (e) => {
  let target = e.target.innerText;
  if (target === "C") {
    resultArea.textContent = "0";
    displayValue = "";
    operator = null;
    firsNum = 0;
    secondNum = 0;
  }
});
