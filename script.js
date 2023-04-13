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
console.log(toggle);

toggle.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e.target.id);
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
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#647198'
          btn.style.boxShadow = '0 4px #475172'
          btn.style.color = '#fff'
        })
        // console.log("One");
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
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#378187'
          btn.style.boxShadow = '0 4px #245f64'
          btn.style.color = '#fff'
        })
      
        // body.classList.add("body-two");
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
        })
        btnDark.forEach(btn =>{
          btn.style.backgroundColor = '#56077C'
          btn.style.boxShadow = '0 4px #9b4cc0'
          btn.style.color = '#fff'
        })
        // const header = document.querySelector(".header");
      // const keypad = document.querySelector(".keypad");
      // const btnDark = document.querySelector(".btn-dark");
      // const reset = document.querySelector(".reset");
      // const equals = document.querySelector(".equals");
      // const btnNum = document.querySelectorAll(".btn-Num");
      // body.classList.add("body-three");
      // header.classList.add("header-three");
      // keypad.classList.add("keypad-three");
      // calculator.classList.add("calculator-three");
      // reset.classList.add("reset-three");
      // btnNum.classList.add("btnNum-three");
      // // display.classList.remove();
      // display.style.backgroundColor = '#1E0936'
      // display.style.color = '#FFE53D'
      // // display.classList.add("display-three");
      // toggleBtn.style.backgroundColor = '#1E0936'
     
      // display.classList.add("display-three");

      // btnDark.style.backgroundColor = "#56077C";
      // equals.style.backgroundColor = "#00DED0";
      // equals.style.boxShadow = "0 4px #00DED0";
      // btnDark.style.boxShadow = " 0 4px #8e1ec2";
     
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
    display.innerHTML = "";
  }

  if (!action) {
    if (displayedNum === "0" || previousKeyType === "operator") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  if (action === "decimal") {
    // displayedNum += ".";
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
    display.innerText = display.innerText.slice(0, -1);
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

  result = result.toString().split(".");
  result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  result.join(".");
  console.log("hello:::  " + result);

  return result;
};

////////////////////////////////////////////////////////////
