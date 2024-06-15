const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator__display");
const buttons = document.querySelector(".calculator__buttons");

// let firsNum = null;
// let secondNum = null;
// let operator = null;
// let displayValue = "";
let numOnDisplay = display.textContent;

function displayNumbers(e) {
  const targetContent = e.target.textContent;
  if (numOnDisplay.length < 9) {
    if (numOnDisplay === "0") {
      numOnDisplay = targetContent;
    } else {
      numOnDisplay += targetContent;
    }
    display.textContent = numOnDisplay;
  }
}

// const add = function (num1, num2) {
//   return num1 + num2;
// };
//
// const subtract = function (num1, num2) {
//   return num1 - num2;
// };
//
// const multiply = function (num1, num2) {
//   return num1 * num2;
// };
//
// const divide = function (num1, num2) {
//   return num2 !== 0 ? num1 / num2 : "ERROR!";
// };
//
// const operate = function (num1, operator, num2) {
//   return operator(num1, num2);
// };

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const target = e.target;
    const action = target.dataset.action;
    const targetContent = target.textContent;
    const numOnDisplay = display.textContent;
    let operator = null;

    if (!action) {
      displayNumbers(e);
    }
    if (
      action === "divide" ||
      action === "multiply" ||
      action === "subtract" ||
      action === "add"
    ) {
      target.classList.add("active");
      operator = action;
      console.log(operator);
    }
    if (action === "clear") {
      console.log("I'm clear button!");
    }
    if (action === "decimal") {
      if (!numOnDisplay.includes(",")) {
        display.textContent = numOnDisplay + targetContent;
      }
    }
    if (action === "equal") {
      console.log("I'm equal button!");
    }
    Array.from(target.parentNode.children).forEach((t) =>
      t.classList.remove("active"),
    );
  }
});

// operatorArea.addEventListener("click", (e) => {
//   let target = e.target;
//   switch (target.innerText) {
//     case "+":
//       operator = add;
//       firsNum = parseInt(displayValue);
//       resultArea.textContent = firsNum;
//       displayValue = "";
//       break;
//     case "-":
//       operator = subtract;
//       firsNum = parseInt(displayValue);
//       resultArea.textContent = firsNum;
//       displayValue = "";
//       break;
//     case "*":
//       operator = multiply;
//       firsNum = parseInt(displayValue);
//       resultArea.textContent = firsNum;
//       displayValue = "";
//       break;
//     case "/":
//       operator = divide;
//       firsNum = parseInt(displayValue);
//       resultArea.textContent = firsNum;
//       displayValue = "";
//       break;
//     case "=":
//       if (operator !== null) {
//         secondNum = parseInt(displayValue);
//         resultArea.textContent = operate(firsNum, operator, secondNum);
//       }
//       break;
//   }
// });
//
// specialArea.addEventListener("click", (e) => {
//   let target = e.target.innerText;
//   if (target === "C") {
//     resultArea.textContent = "0";
//     displayValue = "";
//     operator = null;
//     firsNum = null;
//     secondNum = null;
//   }
// });
