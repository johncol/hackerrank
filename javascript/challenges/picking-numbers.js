function pickingNumbers(numbers = []) {
  const array = [];

  numbers.forEach(number => {
    if (!array[number]) {
      array[number] = 1;
    } else {
      array[number]++;
    }
  });

  let max = 0;
  for (let i = 1; i < array.length; i++) {
    const last = array[i - 1] || 0;
    const current = array[i] || 0;
    const sum = last + current;
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}
