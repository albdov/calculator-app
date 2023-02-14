const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const keys = calculator.querySelector(".keypad");

const toggle = document.querySelectorAll(".btn-theme");
console.log(toggle);

toggle.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target.id);
    if (e.target.id === "one") {
      
      console.log("One");
    } else if (e.target.id == "two") {
      document.querySelector("body").style.backgroundColor = "#E6E6E6"
      const header = document.querySelector(".header")
      const keypad = document.querySelector(".keypad")
      const btnDark = document.querySelector(".btn-dark")
      const reset = document.querySelector(".reset")
      const equals = document.querySelector(".equals")
      header.style.backgroundColor = "#E6E6E6"
      header.style.color = "#000"
      keypad.style.backgroundColor = "#D2CDCD"
      calculator.style.backgroundColor = "#E6E6E6"
      btnDark.style.backgroundColor = "#378187"
      equals.style.backgroundColor = "#C85402"
      equals.style.boxShadow = "0 4px #923e02"
      btnDark.style.boxShadow = " 0 4px #02626b"
      reset.style.backgroundColor = "#378187"
      reset.style.boxShadow = "0 4px #02626b"
      display.style.backgroundColor = "#EEEEEE"
      display.style.color = "#000"
      console.log("Two");
    } else if (e.target.id === "three") {
      console.log("Three");
    }
  });
});

keys.addEventListener("click", (e) => {
  // if (!e.target.matches('button')) {
  //   const key = e.target
  //   Array.from(key.parentNode.children)
  //   .forEach(k => k.classList.remove('is-pressed'))
  //   return;
  // }

  const key = e.target;
  console.log(key);
  const action = key.dataset.action;
  console.log(action);
  const keyContent = key.textContent;
  console.log(keyContent);
  const displayedNum = display.textContent;
  console.log(displayedNum);
  const previousKeyType = calculator.dataset.previousKeyType;

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    // console.log('operator key!');
    // key.classList.add('is-pressed')
    // calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
  }

  if (!action) {
    if (displayedNum === "0" || previousKeyType === "operator") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  if (action === "decimal") {
    console.log("decimal key!");
  }

  if (action === "clear") {
    display.innerHTML = 0;
  }

  if (action === "calculate") {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;

    display.textContent = calculate(firstValue, operator, secondValue);
  }

  if (action === "delete") {
    console.log("delete key!");
  }

  if (!action) {
    if (displayedNum === "0") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  } else if (action === "decimal") {
    display.textContent = displayedNum + ".";
  }
});

const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};

////////////////////////////////////////////////////////////

// let themeColor = "dark";

// function toggleTheme() {
//   const calculator = document.getElementsByClassName("calculator");

//   if (themeColor === "light") {
//     console.log("Clicked 1");
//     calculator.style.backgroundColor = "darkgray";
//     themeColor = "dark";
//     console.log("Clicked 2");
//   } else {
//     calculator.style.backgroundColor = "white";
//     themeColor = "light";
//   }
// }

// document
//   .getElementById("toggle-theme-button")
//   .addEventListener("click", toggleTheme);
