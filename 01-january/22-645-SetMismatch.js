/**
 * @author: ValentinTT
 * @brief 645. Set Mismatch
 * @version 0.1
 * @date 21-01-2023
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let set = new Set(Array.from(Array(nums.length + 1).keys()));
  set.delete(0);
  let repeated = -1;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) set.delete(nums[i]);
    else repeated = nums[i];
  }
  const miss = Array.from(set)[0];
  return [repeated, miss];
};
