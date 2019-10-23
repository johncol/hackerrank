function utopianTree(n) {
  let remainder = n % 2;
  let periods = (n - remainder) / 2;

  let height = 1;
  for (let period = 1; period <= periods; period++) {
    height = height * 2 + 1;
  }

  if (remainder) {
    height *= 2;
  }

  return height;
}
