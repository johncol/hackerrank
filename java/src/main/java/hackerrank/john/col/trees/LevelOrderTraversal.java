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

class LevelOrderTraversal {
  private static final Map<Integer, List<Node>> nodesPerLevel = new HashMap<>();

  private static final java.util.function.Consumer<Node> printNodeData = node -> System.out.print(node.data + " ");

	public static void levelOrder(Node root) {
    addNodeToLevelsMap(root, 1);

    nodesPerLevel
      .keySet()
      .stream()
      .sorted(Comparator.naturalOrder())
      .map(nodesPerLevel::get)
      .flatMap(List::stream)
      .forEach(printNodeData);
  }

  private static void addNodeToLevelsMap(Node node, int level) {
    if (node == null) {
      return;
    }
    
    List<Node> list = nodesPerLevel.get(level);
    if (list == null) {
      list = new ArrayList<Node>();
      nodesPerLevel.put(level, list);
    }
    list.add(node);

    addNodeToLevelsMap(node.left, level + 1);
    addNodeToLevelsMap(node.right, level + 1);
  }
}