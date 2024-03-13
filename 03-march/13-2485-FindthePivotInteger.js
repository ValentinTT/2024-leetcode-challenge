//2485. Find the Pivot Integer
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let total = (n / 2) * (n + 1);
  let left = 0;
  for (let i = 1; i <= n; i++) {
    let right = total - left;
    left += i;
    if (right === left) return i;
  }
  return -1;
};
