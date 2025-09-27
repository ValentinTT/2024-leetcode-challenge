//238. Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [...nums];
  let pre = [...nums];
  let aft = [...nums];

  for (let i = 0; i <= nums.length; i++) {
    if (i - 1 >= 0 && i < nums.length) pre[i] *= pre[i - 1];
    if (nums.length - i - 1 >= 0 && nums.length - i < nums.length)
      aft[nums.length - i - 1] *= aft[nums.length - i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) ans[0] = aft[1];
    else if (i === nums.length - 1) ans[i] = pre[i - 1];
    else ans[i] = pre[i - 1] * aft[i + 1];
  }
  return ans;
};

// Other approach I read:
// /*

//     Time Complexity : O(N), As we iterate the Array(nums) twice. Where N = size of the array.

//     Space complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
//     output does not count towards the space complexity.

//     Solved using Dynamic Programming Approach(Space Optimization). Optimized Approach.

// */

// /***************************************** Approach 3 *****************************************/

// class Solution {
// public:
//     vector<int> productExceptSelf(vector<int>& nums) {
//         int n = nums.size();
//         vector<int> output(n);
//         output[0] = 1;
//         for(int i=1; i<n; i++){
//             output[i] = output[i-1] * nums[i-1];
//         }
//         int right = 1;
//         for(int i=n-1; i>=0; i--){
//             output[i] *= right;
//             right *= nums[i];
//         }
//         return output;
//     }
// };
