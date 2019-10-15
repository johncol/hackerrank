function sockMerchant(_n, socks) {
  let count = 0;

  const colors = {};
  for (let i = 0; i < socks.length; i++) {
    const color = socks[i];
    if (colors[color] !== undefined) {
      delete colors[color];
      count++;
    } else {
      colors[color] = true;
    }
  }

  return count;
}
