package hackerrank.john.col.java;

import java.util.Scanner;

public class JavaAnagrams {

    static boolean isAnagram(String a, String b) {
        java.util.Map<String, Integer> letters = new java.util.HashMap<>();
        
        for (int i = 0; i < a.length(); i++) {
            String letter = String.valueOf(a.charAt(i)).toLowerCase();
            int count = letters.containsKey(letter) ? letters.get(letter) : 0;
            count++;
            letters.put(letter, count);
        }
    
        for (int i = 0; i < b.length(); i++) {
            String letter = String.valueOf(b.charAt(i)).toLowerCase();
            if (!letters.containsKey(letter)) {
                return false;
            }
          
            int count = letters.get(letter);
            count--;
            letters.put(letter, count);
        }
    
        for (int count: letters.values()) {
            if (count != 0) {
                return false;
            }
        }
    
        return true;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}
