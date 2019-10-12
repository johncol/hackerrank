package hackerrank.john.col.trees;

class Node {
  int data;
  Node left;
  Node right;
}

public class PreorderTraversal {
    public static void preOrder(Node node) {
      if (node == null) {
        return;
      }

      System.out.print(node.data + " ");
      
      preOrder(node.left);
      preOrder(node.right);
    }
}
