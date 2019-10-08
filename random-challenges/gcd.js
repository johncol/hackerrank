function generalizedGCD(num, list) {
  const sortedList = list.sort((n1, n2) => n1 - n2);

  let value = sortedList[0];

  while (value > 1) {
    const isGCD = sortedList.every(num => num % value === 0);
    if (isGCD) {
      return value;
    }
    value--;
  }

  return 1;
}
