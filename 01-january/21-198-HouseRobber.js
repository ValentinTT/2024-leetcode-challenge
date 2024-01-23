/**
 * @author: ValentinTT
 * @brief 198. House Robber
 * @version 0.1
 * @date 21-01-2023
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // let n = nums.length;

  // const rec = (idx, previoUsado) => {
  //     if(idx >= n) return 0;
  //     let res;
  //     if(previoUsado) {
  //         res = rec(idx+1, false);
  //     } else {
  //         let resUsado = rec(idx+1, true);
  //         let resNoUsado = rec(idx+1, false);
  //         res = Math.max(resUsado + nums[idx], resNoUsado)
  //     }
  //     return res;
  // }
  // return rec(0, false);

  let rob = 0;
  let norob = 0;
  for (let i = 0; i < nums.length; i++) {
    let newRob = norob + nums[i];
    let newNoRob = Math.max(norob, rob);
    rob = newRob;
    norob = newNoRob;
  }
  return Math.max(rob, norob);
};
