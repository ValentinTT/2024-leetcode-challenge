/**
 * @author: ValentinTT
 * @brief 70. Climbing Stairs
 * @version 0.1
 * @date 18-01-2023
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 1) return 1;
  if(n === 2) return 2;
  
  let steps = new Array(n);
  steps[0] = 1;
  steps[1] = 2;
  
  for(let i = 2; i < n; i++) {
      steps[i] = steps[i-1] + steps[i-2];
  }
  return steps[n-1];
};