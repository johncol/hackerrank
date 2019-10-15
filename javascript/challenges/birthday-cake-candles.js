function birthdayCakeCandles(candles = []) {
  let count = 0;
  let currentMax = -1;

  for (let i = 0; i < candles.length; i++) {
    let candle = candles[i];
    if (candle > currentMax) {
      count = 1;
      currentMax = candle;
    } else if (candle === currentMax) {
      count++;
    }
  }

  return count;
}
