//1291. Sequential Digits
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let res = [];
  for (let i = 1; i <= 9; i++) {
    let n = i;
    let nextDigit = i + 1;
    while (nextDigit <= 9) {
      n = n * 10 + nextDigit;
      if (n >= low && n <= high) res.push(n);
      nextDigit++;
    }
  }
  res.sort((a, b) => a - b);
  return res;
};
