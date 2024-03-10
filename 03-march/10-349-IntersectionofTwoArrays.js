//349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let ans = [];
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  for (let s of s1) {
    if (s2.has(s)) ans.push(s);
  }
  return ans;
};
