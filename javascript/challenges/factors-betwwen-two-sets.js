function getTotalX(a = [], b = []) {
  const ascendingOrder = (n1, n2) => n1 - n2;
  a = a.sort(ascendingOrder);
  b = b.sort(ascendingOrder);

  const maxInA = a[a.length - 1];
  const minInB = b[0];
  if (maxInA > minInB) {
    return 0;
  }

  const lowerFactorA = LCM(a);

  let count = 0;
  let factorInA = lowerFactorA;
  while (factorInA <= minInB) {
    const multiplesInB = b.filter(n => n % factorInA === 0);
    const numberBetwwen = multiplesInB.length === b.length;
    if (numberBetwwen) {
      count++;
    }
    factorInA += lowerFactorA;
  }

  return count;
}

const LCM = (sortedArray = []) => {
  const length = sortedArray.length;
  const max = sortedArray[sortedArray.length - 1];

  let factorOfN;
  let potentialFactor = 0;
  do {
    potentialFactor += max;
    factorOfN = sortedArray.filter(n => potentialFactor % n === 0).length;
  } while (factorOfN !== length);

  return potentialFactor;
};
