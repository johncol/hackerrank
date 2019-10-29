package hackerrank.john.col.java;

import java.io.*;
import java.util.*;
import java.util.Scanner;

public class JavaSubstringComparisons {

    public static String getSmallestAndLargest(String string, int k) {
        String smallest = string.substring(0, k);
        String largest = string.substring(0, k);
        
        for (int i = 1; i < string.length() - k + 1; i++) {
          String substring = string.substring(i, k + i);
          
          if (substring.compareTo(smallest) < 0) {
            smallest = substring;
          }

          if (substring.compareTo(largest) > 0) {
            largest = substring;
          }
        }
        
        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();
      
        System.out.println(getSmallestAndLargest(s, k));
    }
}