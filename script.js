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
      const body = document.querySelector("body")
      const header = document.querySelector(".header")
      const keypad = document.querySelector(".keypad")
      const btnDark = document.querySelectorAll(".btn-dark")
      const reset = document.querySelector(".reset")
      body.classList.add('body-two')
      header.classList.add('header-two')
      keypad.classList.add('keypad-two')
      calculator.classList.add('calculator-two')
      reset.classList.add('reset-two')

      btnDark.forEach(btn =>{
        btn.style.backgroundColor = "#378187"
        btn.style.boxShadow = " 0 4px #02626b"

      })
      display.classList.add('display-two')



      // keypad.classList.remove('keypad')
      // .style.backgroundColor = "#E6E6E6"
      // display.classList.removeAttribute()
      // btnNum.forEach(btn =>{
      //   btn.classList.remove('btn-Num-three')

      // })
      // const equals = document.querySelector(".equals")
      // // calculator.style.backgroundColor = "#E6E6E6"
      // equals.style.backgroundColor = "#C85402"
      // equals.style.boxShadow = "0 4px #923e02"
      // display.style.backgroundColor = "#EEEEEE"
      // display.style.color = "#000"
      // console.log("Two");
    } else if (e.target.id === "three") {
      const body = document.querySelector("body")
      const header = document.querySelector(".header")
      const keypad = document.querySelector(".keypad")
      const btnDark = document.querySelector(".btn-dark")
      const reset = document.querySelector(".reset")
      const equals = document.querySelector(".equals")
      const btnNum = document.querySelectorAll(".btn-Num")
      body.classList.add('body-three')
      header.classList.add('header-three')
      keypad.classList.add('keypad-three')
      calculator.classList.add('calculator-three')
      reset.classList.add('reset-three')
      btnNum.classList.add('btnNum-three')
      display.classList.remove()
      display.classList.add('display-three')
      // btnNum.classList.add('btnNum-three')
      // btnDark.forEach(btn =>{
      //   btn.style.backgroundColor = "#378187"
      //   btn.style.boxShadow = " 0 4px #02626b"

      // })
      display.classList.add('display-three')
      // btnNum.forEach(btn =>{
      //   btn.classList.add('btn-Num-three')

      // })
      // header.style.backgroundColor = "#17062A"
      // btnNum.style.backgroundColor = "#331C4D"
      // header.style.color = "#FFE53D"
      // keypad.style.backgroundColor = "#331C4D"
      // calculator.style.backgroundColor = "#17062A"
      btnDark.style.backgroundColor = "#56077C"
      equals.style.backgroundColor = "#00DED0"
      equals.style.boxShadow = "0 4px #00DED0"
      btnDark.style.boxShadow = " 0 4px #8e1ec2"
      // reset.style.backgroundColor = "#56077C"
      // reset.style.boxShadow = "0 4px #8e1ec2"
      // display.style.backgroundColor = "#1E0936"
      // display.style.color = "#FFE53D"
      // console.log("Three");
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
  // console.log(key);
  const action = key.dataset.action;
  // console.log(action);
  const keyContent = key.textContent;
  // console.log(keyContent);
  let displayedNum = display.textContent;
  // console.log(displayedNum);
  const previousKeyType = calculator.dataset.previousKeyType;
  // console.log(previousKeyType);
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    // console.log('operator key!');
    // key.classList.add('is-pressed')
    // calculator.dataset.previousKeyType = 'operator'
    // displayedNum = keyContent
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = action;
    display.innerHTML = ''
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
    console.log(firstValue);
    const operator = calculator.dataset.operator;
    console.log(operator);
    const secondValue = displayedNum;
    console.log(secondValue);

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
