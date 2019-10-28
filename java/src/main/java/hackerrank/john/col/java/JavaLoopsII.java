package hackerrank.john.col.java;

import java.util.*;
import java.io.*;

public class JavaLoopsII {

    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int i=0; i < t; i++) {
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            printSerieFor(a, b, n);
        }
        in.close();
    }

    static void printSerieFor(int a, int b, int n) {
      String serie = "";
      int lastValue = a;
      for (int i = 0; i < n; i++) {
        lastValue += ((int) Math.pow(2, i)) * b;
        serie += lastValue + " ";
      }
      System.out.println(serie.trim());
    }
}

