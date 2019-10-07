const buttons = [null];
let buttonsInRotation;
const nextIndexes = [null, 4, 1, 2, 7, 0, 3, 8, 9, 6];

const createButton = index => {
  const button = document.createElement('button');
  button.innerHTML = String(index);
  button.id = `btn${index}`;
  button.dataset = { index };
  return button;
};

const initializeButtons = () => {
  const container = document.getElementById('btns');
  for (let i = 1; i <= 9; i++) {
    buttons[i] = createButton(i);
    container.appendChild(buttons[i]);
  }
  buttonsInRotation = buttons
    .filter(button => button !== null)
    .filter(button => button.id !== 'btn5');
};

const rotate = () => {
  const updates = [];
  buttonsInRotation.forEach(button => {
    const index = Number(button.id.substring(3));
    const nextIndex = nextIndexes[index];
    const nextValue = buttons[nextIndex].innerHTML;
    updates[index] = nextValue;
  });

  buttonsInRotation.forEach(button => {
    const index = Number(button.id.substring(3));
    button.innerHTML = updates[index];
  });
};

initializeButtons();

buttons[5].addEventListener('click', rotate);
