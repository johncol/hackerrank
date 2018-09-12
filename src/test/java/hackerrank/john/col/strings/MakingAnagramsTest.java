package hackerrank.john.col.strings;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class MakingAnagramsTest {

  @Test
  public void shouldPassSampleInputOutput() {
    String a = "cde";
    String b = "abc";

    int lettersToRemove = MakingAnagrams.makeAnagram(a, b);

    assertEquals(4, lettersToRemove);
  }

}
