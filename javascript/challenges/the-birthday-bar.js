function birthday(squares, targetSum, length) {
  let count = 0;
  for (let i = 0; i <= squares.length - length; i++) {
    let sum = 0;
    for (let j = i; j < i + length; j++) {
      sum += squares[j];
    }
    if (sum === targetSum) {
      count++;
    }
  }
  return count;
}
