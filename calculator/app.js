let currentOperation = null;
const dataNumbers = document.querySelectorAll("[data-number]");
const dataOp = document.querySelectorAll("[data-operator]");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);

dataNumbers.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

function handleKeyBoardInput(e) {
  if (e.key >= 0 && e.key <= 9) {
    console.log(appendNumber(e.key));
  }
}

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  if (b === 0) {
    return "you cannot divide";
  } else return a / b;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
const operate = (op, a, b) => {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "**":
      return power(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
};


if()


function clearNum() {
  dataNumbers.clear();
}
