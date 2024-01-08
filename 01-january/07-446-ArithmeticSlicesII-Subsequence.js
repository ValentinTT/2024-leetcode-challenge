/**
 * @author: ValentinTT
 * @brief 446. Arithmetic Slices II - Subsequence
 * @version 0.1
 * @date 07-01-2023
 */

function numberOfArithmeticSlices(nums) {
  let counter = Array.from(Array(nums.length), () => new Map());
  let res = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      counter[i].set(
        diff,
        counter[i].get(diff) === undefined ? 1 : counter[i].get(diff) + 1
      );
      if (counter[j].has(diff)) {
        counter[i].set(diff, counter[j].get(diff) + counter[i].get(diff));
        res += counter[j].get(diff);
      }
    }
  }

  return res;
}
