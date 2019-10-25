function cutTheSticks(lengths = []) {
  lengths = lengths.sort((n1, n2) => n1 - n2);

  const n = lengths.length;
  const answer = [n];

  let cutSize = lengths[0];

  for (let i = 1; i < n; i++) {
    if (lengths[i] > cutSize) {
      cutSize = lengths[i];
      answer.push(n - i);
    }
  }

  return answer;
}
