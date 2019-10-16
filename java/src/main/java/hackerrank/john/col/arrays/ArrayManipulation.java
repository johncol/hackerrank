package hackerrank.john.col.arrays;

public class ArrayManipulation {
  static long arrayManipulation(int n, int[][] queries) {
    long[] array = new long[n];

    for (int[] query: queries) {
      int start = query[0];
      int end = query[1];
      int value = query[2];
      array[start - 1] += value;
      if (end < n) {
        array[end] -= value;
      }
    }

    long lastValue = array[0]; 
    long maxValue = lastValue;
    for (int i = 1; i < n; i++) {
      lastValue += array[i];
      if (lastValue > maxValue) {
        maxValue = lastValue;
      }
    }

    return maxValue;
  }
}
