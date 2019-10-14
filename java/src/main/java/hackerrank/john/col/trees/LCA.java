package hackerrank.john.col.trees;

import java.util.*;
import java.io.*;

class LCA {
  public static Node lca(Node node, int v1, int v2) {
    if (v1 < node.data && v2 < node.data) {
      return lca(node.left, v1, v2);
    } else if (v1 > node.data && v2 > node.data) {
      return lca(node.right, v1, v2);
    }
    return node;
  }
}
