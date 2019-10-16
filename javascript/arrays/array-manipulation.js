function arrayManipulation(n, queries) {
  const array = new Array(n).fill(0);

  queries.forEach(query => {
    const [start, end, value] = query;
    array[start - 1] += value;
    if (end < n) {
      array[end] -= value;
    }
  });

  let lastValue = array[0];
  let maxValue = lastValue;
  for (let i = 1; i < n; i++) {
    lastValue += array[i];
    if (lastValue > maxValue) {
      maxValue = lastValue;
    }
  }

  return maxValue;
}
