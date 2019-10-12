function processData(input) {
  const args = input.split('\n');
  const testCases = args[0];

  for (let testCase = 1; testCase <= testCases; testCase++) {
    const string = args[testCase];
    const even = [];
    const odd = [];
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        even.push(string[i]);
      } else {
        odd.push(string[i]);
      }
    }
    console.log(`${even.join('')} ${odd.join('')}`);
  }
}
