function compareTriplets(alice, bob) {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < alice.length; i++) {
    if (alice[i] > bob[i]) aliceScore++;
    if (bob[i] > alice[i]) bobScore++;
  }

  return [aliceScore, bobScore];
}
