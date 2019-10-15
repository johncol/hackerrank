const QUERY_TYPE_1 = 1;

const buildSeqList = n => {
  const list = [];
  for (let i = 0; i < n; i++) {
    list.push([]);
  }
  return list;
};

function dynamicArray(n, queries) {
  const sequences = buildSeqList(n);
  let lastAnswer = 0;

  const results = [];

  queries.forEach(query => {
    const [type, x, y] = query;
    const index = (x ^ lastAnswer) % n;
    const sequence = sequences[index];
    if (type === QUERY_TYPE_1) {
      sequence.push(y);
    } else {
      lastAnswer = sequence[y % sequence.length];
      results.push(lastAnswer);
    }
  });

  return results;
}
