function maxConsecutiveNumberOfOnes(n) {
  let binary = '';
  let reminder;

  while (n > 0) {
    reminder = n % 2;
    binary += reminder.toString();
    n = (n - reminder) / 2;
  }

  const sortedLengths = binary
    .split('0')
    .map(zeroes => zeroes.length)
    .sort((l1, l2) => l2 - l1);

  return sortedLengths[0];
}
