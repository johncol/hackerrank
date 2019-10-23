class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) {
      throw new Error('n and p should be non-negative');
    }
    return n ** p;
  }
}
