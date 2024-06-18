const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator__display");
const buttons = document.querySelector(".calculator__buttons");

const calculate = (num1, operator, num2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "subtract") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "multiply") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "divide") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  return result;
};

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const target = e.target;
    const action = target.dataset.action;
    const targetContent = target.textContent;
    const numOnDisplay = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (
        numOnDisplay === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "equal"
      ) {
        display.textContent = targetContent;
      } else {
        display.textContent = numOnDisplay + targetContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    if (
      action === "divide" ||
      action === "multiply" ||
      action === "subtract" ||
      action === "add"
    ) {
      const firstNumber = calculator.dataset.firstNumber;
      const operator = calculator.dataset.operator;
      if (
        firstNumber &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "equal"
      ) {
        const calcValue = calculate(firstNumber, operator, numOnDisplay);
        display.textContent = calcValue;
        calculator.dataset.firstNumber = calcValue;
      } else {
        calculator.dataset.firstNumber = numOnDisplay;
      }
      target.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
    }

    if (action === "clear") {
      if (target.textContent === "AC") {
        calculator.dataset.firstNumber = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        target.textContent = "AC";
      }
      display.textContent = "0";
      calculator.dataset.previousKeyType = "clear";
    }

    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }

    if (action === "decimal") {
      if (!numOnDisplay.includes(".")) {
        display.textContent = numOnDisplay + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "equal"
      ) {
        display.textContent = "0,";
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    if (action === "equal") {
      let firstNumber = calculator.dataset.firstNumber;
      const operator = calculator.dataset.operator;
      let secondNumber = numOnDisplay;
      if (firstNumber) {
        if (previousKeyType === "equal") {
          firstNumber = numOnDisplay;
          secondNumber = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstNumber, operator, secondNumber);
      }
      calculator.dataset.modValue = secondNumber;
      calculator.dataset.previousKeyType = "equal";
    }
    Array.from(target.parentNode.children).forEach((t) =>
      t.classList.remove("is-depressed"),
    );
  }
});
