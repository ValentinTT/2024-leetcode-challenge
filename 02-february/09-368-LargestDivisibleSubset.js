//368. Largest Divisible Subset
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = Array.from({ length: n + 1 }, () => Number.POSITIVE_INFINITY);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = Number.POSITIVE_INFINITY;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j] + 1);
    }
    dp[i] = min;
  }
  return dp[n];
};
