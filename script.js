const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const keys = calculator.querySelector('.keypad');

keys.addEventListener('click', (e) => {
  if (!e.target.matches('button')) {
    const key = e.target
    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
    return;
  }

  const key = e.target;
  console.log(key);
  const action = key.dataset.action;
  console.log(action);
  const keyContent = key.textContent;
  console.log(keyContent);
  const displayedNum = display.textContent;
  console.log(displayedNum);
  const previousKeyType = calculator.dataset.previousKeyType

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // console.log('operator key!');
    // key.classList.add('is-depressed')
    // calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }

  if (!action) {
    if (displayedNum === '0' || previousKeyType === 'operator') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    display.textContent = calculate(firstValue, operator, secondValue)
  }

  if (action === 'delete') {
    console.log('delete key!')
  }

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }else if(action === 'decimal') {
    display.textContent = displayedNum + '.'
  }
});


const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }



  ////////////////////////////////////////////////////////////

  let themeColor = "light";

function toggleTheme() {
  const calculator = document.getElementById("calculator");

  if (themeColor === "light") {
    calculator.style.backgroundColor = "darkgray";
    themeColor = "dark";
  } else {
    calculator.style.backgroundColor = "white";
    themeColor = "light";
  }
}

document.getElementById("toggle-theme-button").addEventListener("click", toggleTheme);
