function diagonalDifference(array) {
  const { length } = array;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < length; i++) {
    diagonal1 += array[i][i];
    diagonal2 += array[i][length - 1 - i];
  }

  return Math.abs(diagonal1 - diagonal2);
}
