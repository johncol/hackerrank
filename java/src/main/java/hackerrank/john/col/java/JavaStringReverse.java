package hackerrank.john.col.java;

import java.io.*;
import java.util.*;

public class JavaStringReverse {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String string = sc.next();
        sc.close();

        String reversed = "";
        for (int i = string.length() - 1; i >= 0; i--) {
            reversed += String.valueOf(string.charAt(i));
        }

        System.out.println(string.equals(reversed) ? "Yes" : "No");
    }
}
