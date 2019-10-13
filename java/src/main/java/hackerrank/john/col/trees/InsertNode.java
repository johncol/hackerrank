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

class InsertNode {
  
  public static Node insert(Node root, int data) {
    Node newNode = new Node(data);
    if (root == null) {
      return newNode;
    }

    Node node = root;
    while (true) {
      if (data < node.data) {
        if (node.left != null) {
          node = node.left;
        } else {
          node.left = newNode;
          break;
        }
      } else {
        if (node.right != null) {
          node = node.right;
        } else {
          node.right = newNode;
          break;
        }
      }
    }

    return root;
  }
}