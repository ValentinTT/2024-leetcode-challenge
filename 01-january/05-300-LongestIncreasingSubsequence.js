/**
 * @author: ValentinTT
 * @brief 300. Longest Increasing Subsequence
 * @version 0.1
 * @date 05-01-2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let longest = 1;
  let counter = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] >= nums[j]) continue;
      if (counter[j] >= counter[i]) counter[i] = counter[j] + 1;
    }
    if (counter[i] > longest) longest = counter[i];
  }

  return longest;
};
