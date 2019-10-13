package hackerrank.john.col.trees;

import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class LevelOrderTraversalUsingQueue {
  private static final Queue<Node> queue = new LinkedList<>();

	public static void levelOrder(Node root) {
    queue.offer(root);

    while (queue.size() > 0) {
      printNext();
    }
  }

  private static void printNext() {
    Node node = queue.poll();
    if (node == null) return;

    System.out.print(node.data + " ");

    queue.offer(node.left);
    queue.offer(node.right);
  }
}