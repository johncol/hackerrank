package hackerrank.john.col.arrays;

public class DynamicArray {

  static List<List<Integer>> buildSeqList(int n) {
    List<List<Integer>> list = new ArrayList<>();
    for (int i = 0; i < n; i++) {
      List<Integer> inner = new ArrayList<>();
      list.add(inner);
    }
    return list;
  }

  public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {
    List<List<Integer>> sequences = buildSeqList(n);
    int lastAnswer = 0;

    List<Integer> results = new ArrayList<>();
    for (List<Integer> query: queries) {
      int type = query.get(0);
      int x = query.get(1);
      int y = query.get(2);

      int index = (x ^ lastAnswer) % n;
      List<Integer> sequence = sequences.get(index);

      if (type == 1) {
        sequence.add(y);
      } else {
        lastAnswer = sequence.get(y % sequence.size());
        results.add(lastAnswer);
      }
    }

    return results;
  }

}
