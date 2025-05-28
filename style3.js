let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  if (currentInput === '0' && num !== '.') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay(value) {
  display.textContent = value !== undefined ? value : currentInput || '0';
}
