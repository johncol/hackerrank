package hackerrank.john.col.challenges;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class FactorBetweenTwoSets {

    public static int getTotalX(List<Integer> a, List<Integer> b) {
        a = a.stream().sorted((n1, n2) -> n1 - n2).collect(toList());
        b = b.stream().sorted((n1, n2) -> n1 - n2).collect(toList());

        int maxInA = a.get(a.size() - 1);
        int minInB = b.get(0);
        if (maxInA > minInB) {
            return 0;
        }

        int lowerFactorA = LCM(a);

        int count = 0;
        int factorInA = lowerFactorA;

        while (factorInA <= minInB) {
            int multiplesInB = 0;
            for (int n: b) {
                if (n % factorInA == 0) {
                    multiplesInB++;
                }
            }

            boolean numberBetwwen = multiplesInB == b.size();
            if (numberBetwwen) {
                count++;
            }
            factorInA += lowerFactorA;
        }

        return count;
    }

    static int LCM(List<Integer> sortedArray) {
        int length = sortedArray.size();
        int max = sortedArray.get(length - 1);

        int factorOfN;
        int potentialFactor = 0;
        do {
            potentialFactor += max;

            factorOfN = 0;
            for (int n: sortedArray) {
                if (potentialFactor % n == 0) {
                    factorOfN++;
                }
            }
        } while (factorOfN != length);

        return potentialFactor;
    }

}