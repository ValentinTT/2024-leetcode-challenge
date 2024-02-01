// 2966. Divide Array Into Arrays With Max Difference
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i++];
    let b = nums[i++];
    let c = nums[i];
    if (Math.abs(a - b) > k || Math.abs(a - c) > k || Math.abs(b - c) > k)
      return [];
    res.push([a, b, c]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i++];
    let b = nums[i++];
    let c = nums[i];
    if (Math.abs(a - b) > k || Math.abs(a - c) > k || Math.abs(b - c) > k)
      return [];
    res.push([a, b, c]);
  }
  return res;
};
