const Operators = {
  SUM: '+',
  SUB: '-',
  MUL: '*',
  DIV: '/'
};

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

const res = document.getElementById('res');

const operation = {
  operand1: '',
  operand2: '',
  operator: '',
  currentOperand: 1,
  result: '',

  write: value => {
    if (operation.currentOperand === 1) {
      operation.operand1 = `${operation.operand1}${value}`;
    } else {
      operation.operand2 = `${operation.operand2}${value}`;
    }
  },

  setOperator: operator => {
    if (operation.operand1 === '') {
      throw new Error('You need to define the first operand');
    }
    if (operation.operand2 !== '') {
      throw new Error('You already defined the operator: ' + operation.operator);
    }
    operation.operator = operator;
    operation.currentOperand = 2;
  },

  clear: () => {
    operation.operand1 = '';
    operation.operand2 = '';
    operation.operator = '';
    operation.currentOperand = 1;
    operation.result = '';
  },

  execute: (n1, n2) => {
    switch (operation.operator) {
      case Operators.SUM:
        return n1 + n2;
      case Operators.SUB:
        return n1 - n2;
      case Operators.MUL:
        return n1 * n2;
      case Operators.DIV:
        return parseInt(n1 / n2);
      default:
        throw new Error('Unexpected operator: ' + operation.operator);
    }
  },

  calculate: () => {
    if (operation.operand1 === '') {
      throw new Error('Operands missing');
    }
    if (operation.operator === '') {
      throw new Error('Operator missing');
    }
    if (operation.operand2 === '') {
      throw new Error('Second operand missing');
    }

    const n1 = parseInt(operation.operand1, 2);
    const n2 = parseInt(operation.operand2, 2);
    const result = operation.execute(n1, n2);
    operation.result = result.toString(2);

    operation.operand1 = operation.result;
    operation.operator = '';
    operation.operand2 = '';
  },

  toString: () => {
    return `${operation.operand1} ${operation.operator} ${operation.operand2}`;
  }
};

btn0.addEventListener('click', () => operation.write('0'));
btn1.addEventListener('click', () => operation.write('1'));

btnSum.addEventListener('click', () => operation.setOperator(Operators.SUM));
btnSub.addEventListener('click', () => operation.setOperator(Operators.SUB));
btnMul.addEventListener('click', () => operation.setOperator(Operators.MUL));
btnDiv.addEventListener('click', () => operation.setOperator(Operators.DIV));

btnClr.addEventListener('click', () => operation.clear());
btnEql.addEventListener('click', () => operation.calculate());

for (let button of document.getElementsByTagName('button')) {
  button.addEventListener('click', () => {
    console.log('State: ', operation);
    res.innerHTML = operation.toString();
  });
}
