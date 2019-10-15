function countingValleys(_n, steps) {
  let valleys = 0;
  let altitude = 0;
  for (let i = 0; i < steps.length; i++) {
    const stepValue = steps[i] === 'U' ? 1 : -1;
    altitude += stepValue;
    if (altitude === 0 && stepValue === 1) {
      valleys++;
    }
  }
  return valleys;
}
