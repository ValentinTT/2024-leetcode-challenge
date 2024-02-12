//69. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementFirstAttepmt = function (nums) {
  let mp = {};
  let maj = Math.ceil(nums.length / 2);
  for (let n of nums) {
    if (mp[n] === undefined) mp[n] = 0;
    mp[n] += 1;
    if (mp[n] === maj) return n;
  }
  return -1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  //boyer moore algorithm
  let counter = 0;
  let candidate;
  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) candidate = nums[i];
    counter += candidate === nums[i] ? 1 : -1;
  }
  return candidate;
};
