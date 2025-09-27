//525. Contiguous Array
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxLength = function(nums) {
//     let max = 0;
//     for(let i = 0; i < nums.length; i++) {
//         let total = 0;
//         let curr = 0;
//         if(nums.length - i < max) return max;
//         for(let j = i; j < nums.length; j++) {
//             total += nums[j];
//             if((j - i + 1) / 2 === total) {curr = j - i + 1;}
//         }
//         if(curr >= max) max = curr;
//     }
//     return max;
// };

/*
To find the maximum length of a contiguous subarray with an equal number of 0s and 1s,
we can use the concept of prefix sum. Whenever we encounter a 0, 
we decrement the sum by 1, and whenever we encounter a 1, 
we increment the sum by 1. If the prefix sum at two indices is the same, 
it means that the number of 0s and 1s between those two indices is the same. 
We store these prefix sums along with their indices in a hash map. 
Then, for each prefix sum encountered, we check if we have seen this sum before. 
If so, it means that the subarray between the current index and the index where 
this sum was last encountered has an equal number of 0s and 1s. 
We calculate the length of this subarray and update the maximum length accordingly.
 */
var findMaxLength = function (nums) {
  let m = new Map();
  let total = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i] === 1 ? 1 : -1;
    if (total === 0) {
      max = i + 1;
    } else if (m.has(total)) {
      max = Math.max(max, i - m.get(total));
    } else {
      m.set(total, i);
    }
  }
  return max;
};
