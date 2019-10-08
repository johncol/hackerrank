const getNewCellState = (left, right) => {
  return left === right ? 0 : 1;
};

function cellCompete(states, days) {
  if (days === 0) {
    return states;
  }

  const newStates = [getNewCellState(0, states[1])];
  for (let house = 1; house < states.length - 1; house++) {
    newStates.push(getNewCellState(states[house - 1], states[house + 1]));
  }
  newStates.push(getNewCellState(states[states.length - 2], 0));

  return cellCompete(newStates, days - 1);
}
