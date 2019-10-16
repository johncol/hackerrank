package hackerrank.john.col.linkedlists;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class HasCycle {

    static boolean hasCycle(SinglyLinkedListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        SinglyLinkedListNode pointerA = head;
        SinglyLinkedListNode pointerB = head;
        while (pointerB != null && pointerB.next != null) {
            pointerA = pointerA.next;
            pointerB = pointerB.next.next;
            if (pointerA == pointerB) {
                return true;
            }
        }

        return false;
    }

}