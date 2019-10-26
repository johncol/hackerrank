function bubbleSort(a = []) {
  const n = a.length;
  const swap = i => {
    const temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  };

  let totalSwaps = 0;
  for (let i = 0; i < n; i++) {
    let numberOfSwaps = 0;

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(j);
        numberOfSwaps++;
      }
    }

    totalSwaps += numberOfSwaps;

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }

  console.log(`Array is sorted in ${totalSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}
