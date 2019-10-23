function divisibleSumPairs(n = 0, k = 0, numbers = []) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = numbers[i] + numbers[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }

  return count;
}
