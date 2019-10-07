package hackerrank.john.col.arrays;

public class TwoDimensionsArray {

  public static int hourglassSum(int[][] arr) {
    int rows = arr.length;
    int columns = arr[0].length;
    int maxSum = Integer.MIN_VALUE;
    for (int row = 0; row < rows - 2; row++) {
      for (int column = 0; column < columns - 2; column++) {
        int[] row1 = arr[row];
        int[] row2 = arr[row + 1];
        int[] row3 = arr[row + 2];
        int hourglassSum =
            row1[column] + row1[column + 1] + row1[column + 2] +
                           row2[column + 1] +
            row3[column] + row3[column + 1] + row3[column + 2];
        if (hourglassSum > maxSum) {
          maxSum = hourglassSum;
        }
      }
    }
    return maxSum;
  }

}
