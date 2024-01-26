/**
 * @author: ValentinTT
 * @brief 576. Out of Boundary Paths
 * @version 0.1
 * @date 26-01-2023
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  let dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(maxMove + 1).fill(-1))
  );

  const rec = (i, j, mov) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return 1;
    if (mov <= 0) return 0;
    if (dp[i][j][mov] !== -1) return dp[i][j][mov];

    let res = 0;

    res += rec(i - 1, j, mov - 1);
    res += rec(i + 1, j, mov - 1);
    res += rec(i, j - 1, mov - 1);
    res += rec(i, j + 1, mov - 1);

    dp[i][j][mov] = res % 1000000007;

    return dp[i][j][mov];
  };

  return rec(startRow, startColumn, maxMove);
};
