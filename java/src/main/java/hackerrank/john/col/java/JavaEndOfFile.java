package hackerrank.john.col.java;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class JavaEndOfFile {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int line = 1;
        while (scanner.hasNext()) {
            System.out.println((line++) + " " + scanner.nextLine());
        }
        scanner.close();
    }
}
