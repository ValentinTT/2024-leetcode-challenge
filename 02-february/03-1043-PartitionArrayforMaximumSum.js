// 1043. Partition Array for Maximum Sum
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  let dp = new Array(k).fill(0);
  dp[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    let max_at_i = 0;
    for (let j = i; i - j < k && j >= 0; j--) {
      max = Math.max(max, arr[j]);
      let w_size = i - j + 1;
      let curr_sum = max * w_size;
      let sub_sum = j > 0 ? dp[(j - 1) % k] : dp[k - 1];
      max_at_i = Math.max(max_at_i, curr_sum + sub_sum);
    }

    dp[i % k] = max_at_i;
  }
  return dp[(arr.length - 1) % k];
};
