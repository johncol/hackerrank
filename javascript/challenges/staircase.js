function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const line = ' '.repeat(n - i) + '#'.repeat(i);
    console.log(line);
  }
}
