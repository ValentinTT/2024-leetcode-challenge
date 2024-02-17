/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let map = new Map();
  for (let n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let counters = [...map.values()].sort((a, b) => a - b);

  for (let i = 0; i < counters.length; i++) {
    if (k > counters[i]) {
      k -= counters[i];
    } else if (k === counters[i]) return counters.length - i - 1;
    else return counters.length - i;
  }
  return counters.length;
};
