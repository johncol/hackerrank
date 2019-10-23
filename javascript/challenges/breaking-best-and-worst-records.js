function breakingRecords(scores = []) {
  let min = scores[0];
  let max = scores[0];
  let lowerScoreBroken = 0;
  let greaterScoreBroken = 0;

  for (let score of scores) {
    if (score < min) {
      min = score;
      lowerScoreBroken++;
    } else if (score > max) {
      max = score;
      greaterScoreBroken++;
    }
  }

  return [greaterScoreBroken, lowerScoreBroken];
}
