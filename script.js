const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const keys = calculator.querySelector('.keypad');

keys.addEventListener('click', (e) => {
  if (!e.target.matches('button')) {
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

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('calculate key!')
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
  }
});
