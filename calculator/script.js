class Calculator {
  constructor(prevOperandTextElem, currentOperandTextElem) {
    this.prevOperandTextElem = prevOperandTextElem;
    this.currentOperandTextElem = currentOperandTextElem;
    this.readyToReset = false;
    this.clear();
  }

  clear() {
    this.prevOperand = '';
    this.currentOperand = '';
    this.operation = '';
    this.readyToReset = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  changeSign() {
    this.currentOperand = (this.currentOperand !== '') ? -this.currentOperand : '-';
  }

  fraction() {
    if (this.currentOperand !== '' && parseFloat(this.currentOperand) !== 0) {
      this.currentOperand = 1 / parseFloat(this.currentOperand);
    } else if (parseFloat(this.currentOperand) === 0) {
      this.currentOperand = NaN;
    }
  }

  sqrt() {
    this.readyToReset = true;
    this.currentOperand = (parseFloat(this.currentOperand) >= 0)
      ? Math.sqrt(parseFloat(this.currentOperand))
      : NaN;
  }

  chooseOperation(operation) {
    if (!this.currentOperand && !this.prevOperand) return;
    if (this.currentOperand && this.prevOperand) {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = (this.prevOperand) ? this.prevOperand : this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    const prev = parseFloat(this.prevOperand);
    const current = parseFloat(this.currentOperand);
    let result;

    if (Number.isNaN(prev) || Number.isNaN(current)) return;

    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '÷':
        result = (current !== 0) ? prev / current : NaN;
        break;
      case '^':
        result = prev ** current;
        break;
      default:
        return;
    }
    this.readyToReset = true;
    this.currentOperand = Math.round(result * 1000000000000) / 1000000000000;
    this.prevOperand = '';
    this.operation = '';
  }

  // eslint-disable-next-line class-methods-use-this
  digitsSeparate(number) {
    const strNumber = number.toString();
    const intDigits = parseInt(strNumber.split('.')[0], 10);
    const decimalDigits = strNumber.split('.')[1];

    const digitsDisplay = (!Number.isNaN(intDigits))
      ? intDigits.toLocaleString('ru-RU')
      : '';

    if (decimalDigits != null) {
      return `${digitsDisplay}.${decimalDigits}`;
    }
    return digitsDisplay;
  }

  updateDisplay() {
    if (Number.isNaN(this.currentOperand)) {
      this.currentOperandTextElem.innerText = 'error';
      this.prevOperandTextElem.innerText = '';
      this.clear();
      return;
    }
    this.currentOperandTextElem.innerText = this.digitsSeparate(this.currentOperand);

    if (this.operation != null) {
      this.prevOperandTextElem.innerText = `${this.digitsSeparate(this.prevOperand)} ${this.operation}`;
    } else {
      this.prevOperandTextElem.innerText = '';
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const minusBtn = document.querySelector('[data-minus]');
const fractionBtn = document.querySelector('[data-fraction]');
const sqrtBtn = document.querySelector('[data-sqrt]');
const prevOperandTextElem = document.querySelector('[data-previous-operand]');
const currentOperandTextElem = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevOperandTextElem, currentOperandTextElem);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (calculator.currentOperand && !calculator.prevOperand && calculator.readyToReset) {
      calculator.currentOperand = '';
      calculator.readyToReset = false;
    }

    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operation = (button.innerText === 'xn') ? '^' : button.innerText;
    calculator.chooseOperation(operation);
    calculator.updateDisplay();
  });
});

allClearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

minusBtn.addEventListener('click', () => {
  calculator.changeSign();
  calculator.updateDisplay();
});

fractionBtn.addEventListener('click', () => {
  calculator.fraction();
  calculator.updateDisplay();
});

sqrtBtn.addEventListener('click', () => {
  calculator.sqrt();
  calculator.updateDisplay();
});

equalsBtn.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});
