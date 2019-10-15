function miniMaxSum(array = []) {
  array = array.sort((n1, n2) => n1 - n2);
  const lowest = array[0];
  const greatest = array[array.length - 1];

  const total = array.reduce((sum, n) => sum + n, 0);

  console.log(`${total - greatest} ${total - lowest}`);
}
