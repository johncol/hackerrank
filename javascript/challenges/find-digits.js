function findDigits(n = 0) {
  return n
    .toString(10)
    .split('')
    .map(d => Number.parseInt(d, 10))
    .filter(d => d !== 0)
    .filter(d => n % d === 0).length;
}
