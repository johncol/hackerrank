package hackerrank.john.col.java;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Java2DArray {

    private static final Scanner scanner = new Scanner(System.in);

    private static final int ARRAY_MIN_VALUE = -9;

    static int sumHourglassFor(int[][] array, int x, int y) {
        return array[y - 2][x - 2] +
            array[y - 2][x - 1] +
            array[y - 2][x] +
            array[y - 1][x - 1] +
            array[y][x - 2] +
            array[y][x - 1] +
            array[y][x];
    }

    static int findMaxHourglassSum(int[][] array) {
        int hourglassSize = 3;
        int n = array.length;

        int max = ARRAY_MIN_VALUE * 7 - 1;

        for (int x = hourglassSize - 1; x < n; x++) {
            for (int y = hourglassSize - 1; y < n; y++) {
                int hourglassSum = sumHourglassFor(array, y, x);
                if (hourglassSum > max) {
                    max = hourglassSum;
                }
            }
        }

        return max;
    }

    public static void main(String[] args) {
        int[][] array = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                array[i][j] = arrItem;
            }
        }

        scanner.close();

        System.out.println(findMaxHourglassSum(array));
    }
}
