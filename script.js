const keypad = document.querySelector(".keypad");
const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");
const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const keys = calculator.querySelector(".keypad");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const header = document.querySelector(".header");
const btnNum = document.querySelectorAll(".btn-Num");
const btnDark = document.querySelectorAll(".btn-dark");
const equals = document.querySelector(".equals");
const toggle = document.querySelectorAll(".btn-theme");

toggle.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.id === "one") {
      (one.style.backgroundColor = "#D03F2F"),
      (two.style.backgroundColor = "transparent"),
        (three.style.backgroundColor = "transparent");
        toggleBtn.style.backgroundColor = '#242D44'
        body.style.backgroundColor = '#3A4663'
        header.style.backgroundColor = '#3A4663'
        header.style.color = '#fff'
        toggleBtn.style.backgroundColor = '#242D44'
        display.style.backgroundColor = '#181F33'
        display.style.color = '#fff'
        calculator.style.backgroundColor = '#3A4663'
        keypad.style.backgroundColor = '#242D44'
        equals.style.backgroundColor = '#D03F2F'
        equals.style.boxShadow = '0 4px #700d02'
        btnNum.forEach(btn =>{
          btn.style.backgroundColor = '#EAE3DC'
          btn.style.boxShadow = '0 4px #b3b2b2'
          btn.style.color = '#434A59'
          btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = '#cfc4bc';
          });
          btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = '#EAE3DC';
          });
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#647198'
          btn.style.boxShadow = '0 4px #475172'
          btn.style.color = '#fff'
        })
      } else if (e.target.id == "two") {
        (one.style.backgroundColor = "transparent"),
        (two.style.backgroundColor = "#C85402"),
        (three.style.backgroundColor = "transparent");
        const reset = document.querySelector(".reset");
        body.style.backgroundColor = '#E6E6E6'
        header.style.backgroundColor = '#E6E6E6'
        header.style.color = '#000'
        toggleBtn.style.backgroundColor = '#D2CDCD'
        display.style.backgroundColor = '#EEEEEE'
        display.style.color = '#36362C'
        calculator.style.backgroundColor = '#E6E6E6'
        keypad.style.backgroundColor = '#D2CDCD'
        equals.style.backgroundColor = '#D03F2F'
        equals.style.boxShadow = '0 4px #700d02'
        btnNum.forEach(btn =>{
          btn.style.backgroundColor = '#EAE3DC'
          btn.style.boxShadow = '0 4px #b3b2b2'
          btn.style.color = '#434A59'
          btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = '#FFFFFF';
          });
          btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = '#EAE3DC';
          });
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#378187'
          btn.style.boxShadow = '0 4px #245f64'
          btn.style.color = '#fff'
        })
      

      header.classList.add("header-two");
      keypad.classList.add("keypad-two");
      calculator.classList.add("calculator-two");
      reset.classList.add("reset-two");
     

      btnDark.forEach((btn) => {
        btn.style.backgroundColor = "#378187";
        btn.style.boxShadow = " 0 4px #02626b";
      });
      display.classList.add("display-two");
    } else if (e.target.id === "three") {
      (one.style.backgroundColor = "transparent"),
        (two.style.backgroundColor = "transparent"),
        (three.style.backgroundColor = "#00DED0");
      const body = document.querySelector("body");
      body.style.backgroundColor = '#17062A'
      header.style.backgroundColor = '#17062A'
      header.style.color = '#FFE53D'
      toggleBtn.style.backgroundColor = '#1E0936'
      display.style.backgroundColor = '#1E0936'
        display.style.color = '#FFE53D'
        calculator.style.backgroundColor = '#17062A'
        keypad.style.backgroundColor = '#1E0936'
        equals.style.backgroundColor = '#00DED0'
        equals.style.boxShadow = '0 4px #6efcf2'
        btnNum.forEach(btn =>{
          btn.style.backgroundColor = '#331C4D'
          btn.style.boxShadow = '0 4px #56077C'
          btn.style.color = '#FFE53D'
          btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = '#6C34AC';
          });
          btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = '#331C4D';
          });
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#56077C'
          btn.style.boxShadow = '0 4px #9b4cc0'
          btn.style.color = '#fff'
        })
    }
  });
});


keys.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  let displayedNum = display.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    if (previousKeyType === "operator") {
      calculator.dataset.operator = action;
    } else if (previousKeyType === "calculate") {
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    } else {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && secondValue) {
        displayedNum = calculate(firstValue, operator, secondValue);
        display.textContent = displayedNum;
      }

      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    calculator.dataset.previousKeyType = "operator";
    display.textContent = keyContent;
  }

  if (!action || action === "decimal") {
    if (previousKeyType === "operator" || previousKeyType === "calculate") {
      display.textContent = "";
    }
    display.textContent += keyContent;
    calculator.dataset.previousKeyType = "number";
  }

  if (action === "clear") {
    calculator.dataset.firstValue = "";
    calculator.dataset.operator = "";
    calculator.dataset.previousKeyType = "";
    display.textContent = "";
  }

  if (action === "calculate") {
    if (previousKeyType !== "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && secondValue) {
        displayedNum = calculate(firstValue, operator, secondValue);
        display.textContent = displayedNum;
        calculator.dataset.firstValue = displayedNum;
      }
    }
    calculator.dataset.previousKeyType = "calculate";
  }

  if (action === "delete") {
    display.innerText = display.textContent.slice(0, -1);
    calculator.dataset.previousKeyType = "operator";
  }
});


// Calculate numbers function

const calculate = (n1, operator, n2) => {
  let result = "";

  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  // Check for valid operator
  if (!isNaN(num1) && !isNaN(num2)) {
    if (operator === "add") {
      result = num1 + num2;
    } else if (operator === "subtract") {
      result = num1 - num2;
    } else if (operator === "multiply") {
      result = num1 * num2;
    } else if (operator === "divide") {
      if (num2 === 0) {
        // Handle division by zero
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
    } else {
      result = "Error: Invalid operator";
    }
  } else {
    result = "Error: Invalid numbers";
  }


  return result;
};
