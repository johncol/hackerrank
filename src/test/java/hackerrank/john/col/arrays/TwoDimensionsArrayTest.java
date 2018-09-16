package hackerrank.john.col.arrays;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class TwoDimensionsArrayTest {

  @Test
  public void shouldPassSampleInputOutput() {
    int arr[][] = {
        {0, 1, 0, 0, 0, 0},
        {1, 1, 1, 0, 0, 0},
        {0, 0, 2, 4, 4, 0},
        {0, 0, 0, 2, 0, 0},
        {0, 0, 1, 2, 4, 0}
    };

    int result = TwoDimensionsArray.hourglassSum(arr);

    assertEquals(19, result);
  }

}
