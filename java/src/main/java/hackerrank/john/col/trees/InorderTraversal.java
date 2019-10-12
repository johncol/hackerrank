package hackerrank.john.col.trees;

class Node {
  int data;
  Node left;
  Node right;
}

public class InorderTraversal {
    public static void inOrder(Node node) {
      if (node == null) {
        return;
      }
      
      inOrder(node.left);

      System.out.print(node.data + " ");

      inOrder(node.right);
    }
}
