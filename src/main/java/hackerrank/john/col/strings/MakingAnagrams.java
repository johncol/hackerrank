package hackerrank.john.col.strings;

import java.util.HashMap;
import java.util.Map;

public class MakingAnagrams {

  public static int makeAnagram(String a, String b) {
    Map<Character, Integer> indexes = new HashMap<>();

    int counter = 0;
    for (int i = 0; i < a.length(); i++) {
      char character = a.charAt(i);
      int index = b.indexOf(character, indexes.getOrDefault(character, 0));
      if (index != -1) {
        indexes.put(character, index + 1);
        counter++;
      }
    }

    return (b.length() - counter) + (a.length() - counter);

  }

}
