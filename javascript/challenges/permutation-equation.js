function permutationEquation(p = []) {
  const n = p.length;
  p.unshift(0);

  let result = [];
  for (let i = 1; i <= n; i++) {
    const y = p.indexOf(p.indexOf(i));
    result.push(y);
  }

  return result;
}
