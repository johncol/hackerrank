const ARRAY_MIN_VALUE = -9;

function findMaxHourglassSum(array = []) {
  const hourglassSize = 3;
  const n = array.length;

  const sumHourglassFor = (y, x) =>
    array[y - 2][x - 2] +
    array[y - 2][x - 1] +
    array[y - 2][x] +
    array[y - 1][x - 1] +
    array[y][x - 2] +
    array[y][x - 1] +
    array[y][x];

  let max = ARRAY_MIN_VALUE * 7 - 1;
  for (let x = hourglassSize - 1; x < n; x++) {
    for (let y = hourglassSize - 1; y < n; y++) {
      const hourglassSum = sumHourglassFor(y, x);
      if (hourglassSum > max) {
        max = hourglassSum;
      }
    }
  }

  return max;
}
