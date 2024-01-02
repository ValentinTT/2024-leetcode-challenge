/**
 * @author: ValentinTT
 * @brief 455. Assign Cookies ()
 * @version 0.1
 * @date 01-01-2023
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    if (s[j] >= g[i]) i++;
  }
  return i;
};
