//2149. Rearrange Array Elements by Sign
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let res = [...nums];
  let idxP = 0;
  let idxN = 0;
  let i = 0;
  while (i < res.length) {
    while (nums[idxP] <= 0) idxP++;
    while (nums[idxN] >= 0) idxN++;
    res[i++] = nums[idxP++];
    res[i++] = nums[idxN++];
  }
  return res;
};
