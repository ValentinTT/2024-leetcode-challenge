/**
 * @author: ValentinTT
 * @brief 1207. Unique Number of Occurrences
 * @version 0.1
 * @date 17-01-2023
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], 0);
    map.set(arr[i], map.get(arr[i]) + 1);
  }

  let set = new Set();

  for (let [_, counter] of map) {
    if (set.has(counter)) return false;
    set.add(counter);
  }
  return true;
};
