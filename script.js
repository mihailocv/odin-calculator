const resultArea = document.querySelector("#result");
const numberArea = document.querySelector("#numbers");
const operatorArea = document.querySelector("#operators");
const specialArea = document.querySelector("#specials");

let firsNum = null;
let secondNum = null;
let operator = null;
let displayValue = "";

function display(button) {
  let target = button.target.innerText;
  if (displayValue.length !== 9) {
    displayValue += target;
  }
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

numberArea.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    display(e);
  }
});

operatorArea.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.innerText) {
    case "+":
      operator = add;
      firsNum = parseInt(displayValue);
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
        secondNum = parseInt(displayValue);
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
    firsNum = null;
    secondNum = null;
  }
});
