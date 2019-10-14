package hackerrank.john.col.trees;

import java.util.*;
import java.io.*;

class TopView {
  static class NodeWrapper {
    int positionY;
    int data;
    NodeWrapper left;
    NodeWrapper right;

    NodeWrapper(Node node, int positionY) {
      this.positionY = positionY;
      this.data = node.data;
      if (node.left != null) {
        this.left = new NodeWrapper(node.left, positionY + 1);
      }
      if (node.right != null) {
        this.right = new NodeWrapper(node.right, positionY + 1);
      }
    }
  }

  private final static Map<Integer, NodeWrapper> nodes = new HashMap<>();

  public static void topView(Node node) {
    NodeWrapper root = new NodeWrapper(node, 0);

    findAndPutTopViewNodes(root, 0);

    nodes.keySet()
      .stream()
      .sorted(Comparator.naturalOrder())
      .forEach(key -> System.out.print(nodes.get(key).data + " "));
  }

  public static void findAndPutTopViewNodes(NodeWrapper node, int positionX) {
    if (node == null) {
      return;
    }

    if (!nodes.containsKey(positionX) || node.positionY < nodes.get(positionX).positionY) {
      nodes.put(positionX, node);
    }

    findAndPutTopViewNodes(node.left, positionX - 1);
    findAndPutTopViewNodes(node.right, positionX + 1);
  }
}