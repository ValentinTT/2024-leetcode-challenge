/**
 * @author: ValentinTT
 * @brief 2870. Minimum Number of Operations to Make Array Empty
 * @version 0.1
 * @date 04-01-2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let counter = new Map();
  for (const n in nums) {
    const count = counter.get(nums[n]);
    if (count === undefined) counter.set(nums[n], 1);
    else counter.set(nums[n], count + 1);
  }

  let result = 0;
  console.log(counter);

  for (const key of counter.keys()) {
    let count = counter.get(key);
    if (count === 1) return -1; //impossible

    if (count % 3 === 0) result += count / 3;
    else result += Math.floor(count / 3) + 1;
  }
  return result;
};

console.log(
  minOperations([
    14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
  ])
);
