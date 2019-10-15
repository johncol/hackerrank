function plusMinus(array) {
  const total = array.length;
  let greaterThanZero = 0;
  let lowerThanZero = 0;
  let zeros = 0;

  for (let i = 0; i < total; i++) {
    if (array[i] > 0) greaterThanZero++;
    else if (array[i] < 0) lowerThanZero++;
    else zeros++;
  }

  const print = fraction => console.log((fraction / total).toFixed(6));

  print(greaterThanZero);
  print(lowerThanZero);
  print(zeros);
}
