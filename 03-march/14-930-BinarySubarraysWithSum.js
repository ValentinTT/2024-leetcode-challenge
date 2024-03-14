//930. Binary Subarrays With Sum
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = i; j < nums.length; j++) {
      total += nums[j];
      if (total === goal) {
        counter++;
        console.log("i, j: ", i, j);
      } else if (total > goal) break;
    }
  }
  return counter;
};

//Version two: https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4874116/javascript-professional-approach-and-in-depth-explanation
var numSubarraysWithSum = function (nums, goal) {
  let count = new Map();
  count.set(0, 1);
  let currSum = 0;
  let totalSubarrays = 0;

  for (let num of nums) {
    currSum += num;
    if (count.has(currSum - goal)) {
      totalSubarrays += count.get(currSum - goal);
    }
    count.set(currSum, (count.get(currSum) || 0) + 1);
  }

  return totalSubarrays;
};
