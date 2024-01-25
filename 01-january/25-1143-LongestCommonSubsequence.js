/**
 * @author: ValentinTT
 * @brief 1143. Longest Common Subsequence
 * @version 0.1
 * @date 25-01-2023
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill(0)
  );
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) dp[i][j] = 1 + dp[i + 1][j + 1];
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp[0][0];
};
