//451. Sort Characters By Frequency
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();

  for (let ch of s) {
    if (!map.has(ch)) map.set(ch, 1);
    else map.set(ch, map.get(ch) + 1);
  }

  let order = [...map.entries()].sort((a, b) => b[1] - a[1]);

  return order.map((counter) => counter[0].repeat(counter[1])).join("");
};
