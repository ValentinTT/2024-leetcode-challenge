/**
 * @author: ValentinTT
 * @brief 907. Sum of Subarray Minimums
 * @version 0.1
 * @date 20-01-2023
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  // too slow
  // let total = arr.reduce((acc, cur) => acc + cur, 0);
  // for(let i = 1; i < arr.length; i++) {
  //     const n = arr.length - i
  //     for(let j = 0; j < n; j++) {
  //         arr[j] = Math.min(arr[j], arr[j+1]);
  //         total += arr[j]
  //     }
  // }

  let left = new Array(arr.length).fill(-1);
  let right = new Array(arr.length).fill(arr.length);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let left = i - 1,
      right = i + 1;

    while (left >= 0 && arr[left] >= arr[i]) left--;
    while (right < arr.length && arr[right] > arr[i]) right++;

    total += (right - i) * (i - left) * arr[i];
  }

  return total % (10 ** 9 + 7);
};
