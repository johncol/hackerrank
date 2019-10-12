package hackerrank.john.col.trees;

class Node {
  int data;
  Node left;
  Node right;
}

public class PostorderTraversal {
    public static void postOrder(Node node) {
      if (node == null) {
        return;
      }
      
      postOrder(node.left);
      postOrder(node.right);

      System.out.print(node.data + " ");
    }
}
