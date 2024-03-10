//2540. Minimum Common Value
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let aI = 0;
  let bI = 0;
  while (aI < nums1.length && bI < nums2.length) {
    if (nums1[aI] < nums2[bI]) aI++;
    else if (nums1[aI] > nums2[bI]) bI++;
    else return nums1[aI];
  }
  return -1;
};
