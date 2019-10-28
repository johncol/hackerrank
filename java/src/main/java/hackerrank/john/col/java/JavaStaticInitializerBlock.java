package hackerrank.john.col.java;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaStaticInitializerBlock {

    static int B;
    static int H;
    static boolean flag;

    static {
        Scanner sc = new Scanner(System.in);
        B = sc.nextInt();
        H = sc.nextInt();
        flag = H > 0 && B > 0;
        if (!flag) {
            System.out.println("java.lang.Exception: Breadth and height must be positive");
        }

        sc.close();
    }

    public static void main(String[] args){
      if (flag){
        int area = B * H;
        System.out.print(area);
      }
    }

}
