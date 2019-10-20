package hackerrank.john.col.daysofcode;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Difference {
  final int[] elements;
  int maximumDifference;
  
  public Difference(int[] elements) {
    this.elements = elements;
    this.maximumDifference = -1;
  }

  public void computeDifference() {
    this.maximumDifference = this.findDifference();
  }

  public int findDifference() {
    int n = this.elements.length;
    if (n <= 1) {
      return 0;
    }

    int maxDifference = -1;
    for (int i = 0; i < n - 1; i++) {
      for (int j = i + 1; j < n; j++) {
        int difference = Math.abs(this.elements[i] - this.elements[j]);
        if (difference > maxDifference) {
          maxDifference = difference;
        }
      }
    }

    return maxDifference;
  }
}