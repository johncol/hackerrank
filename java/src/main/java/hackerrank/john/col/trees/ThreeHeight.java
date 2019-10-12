package hackerrank.john.col.trees;

class Node {
  int data;
  Node left;
  Node right;
}

public class ThreeHeight {
  public static int height(Node node) {
    if (node == null) {
      return -1;
    }

    int leftHeight = height(node.left);
    int rightHeight = height(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
