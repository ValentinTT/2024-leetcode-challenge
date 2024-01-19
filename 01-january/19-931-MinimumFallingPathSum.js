/**
 * @author: ValentinTT
 * @brief 931. Minimum Falling Path Sum
 * @version 0.1
 * @date 19-01-2023
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] += Math.min(
        ...matrix[i + 1].slice(Math.max(0, j - 1), Math.min(n, j + 2))
      );
    }
  }
  return Math.min(...matrix[0]);
};
