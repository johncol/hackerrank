package hackerrank.john.col.trees;

public class HuffmanDecoding {
  static class DecodingState {
    String encoded;
    String decoded = "";
    int index = 0;

    DecodingState(String encoded) {
      this.encoded = encoded;
    }

    void appendLetter(char letter) {
      this.decoded += String.valueOf(letter);
    }

    boolean pendingCodes() {
      return this.index<this.encoded.length();
    }

    Code nextCode() {
      return new Code(this.encoded.charAt(this.index++));
    }
  }

  static class Code {
    char code;

    Code(char code) {
      this.code = code;
    }

    boolean isZero() {
      return this.code == '0';
    }
  }

  void findNextLetter(Node node, DecodingState decoding) {
    while (node.left != null && node.right != null) {
      if (decoding.nextCode().isZero()) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    decoding.appendLetter(node.data);
  }

  void decode(String s, Node root) {
    DecodingState decoding = new DecodingState(s);

    while (decoding.pendingCodes()) {
      findNextLetter(root, decoding);
    }

    System.out.print(decoding.decoded);
  }
}