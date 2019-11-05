function maxBitwise(n = 0, k = 0) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const result = i & j;
      if (result > max && result < k) {
        max = result;
      }
    }
  }
  return max;
}
