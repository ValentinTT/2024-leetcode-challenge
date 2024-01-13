/**
 * @author: ValentinTT
 * @brief 1347. Minimum Number of Steps to Make Two Strings Anagram
 * @version 0.1
 * @date 13-01-2023
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let sMap = new Map();

  // Create a map counting the occurrences of each char in s
  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) sMap.set(s[i], 1);
    else sMap.set(s[i], sMap.get(s[i]) + 1);
  }

  // Substract the chars that appear in t and s
  for (let i = 0; i < t.length; i++) {
    if (sMap.has(t[i])) sMap.set(t[i], sMap.get(t[i]) - 1);
  }

  let res = 0;

  for (let [_, count] of sMap) {
    if (count > 0) res += count;
  }

  return res;
};
