class Difference {
  constructor(elements = []) {
    this.elements = elements;
    this.maximumDifference = -1;
  }

  computeDifference() {
    this.maximumDifference = this.findDifference();
  }

  findDifference() {
    const n = this.elements.length;
    if (n <= 1) {
      return 0;
    }

    let maxDifference = -1;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const difference = Math.abs(this.elements[i] - this.elements[j]);
        if (difference > maxDifference) {
          maxDifference = difference;
        }
      }
    }

    return maxDifference;
  }
}
