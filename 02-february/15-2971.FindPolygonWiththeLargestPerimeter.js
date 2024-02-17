//2971. Find Polygon With the Largest Perimeter
// time: O(nlogn) [<-the sort] space: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  let a = [...nums];
  for (let i = a.length - 2; i >= 0; i--) {
    a[i] += a[i + 1];
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < a[i + 1]) return a[i];
  }
  return -1;
};

// time: O(nlogn) [<-the sort] space: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  let total = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length - 2; i++) {
    total -= nums[i];
    if (nums[i] < total) return total + nums[i];
  }
  return -1;
};
