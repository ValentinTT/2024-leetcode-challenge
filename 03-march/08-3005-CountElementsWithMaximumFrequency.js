//3005. Count Elements With Maximum Frequency
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let counter = Array.from({ length: 101 }).fill(0);

  let max = 0;

  for (let e of nums) {
    counter[e]++;
    if (counter[e] > max) max = counter[e];
  }

  return counter.filter((e) => e === max).length * max;
};
