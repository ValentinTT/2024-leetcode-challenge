//49. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let a = "a".charCodeAt();

  strs.map((word) => {
    counter = new Array(26).fill(0);
    for (let c of word) {
      counter[c.charCodeAt() - a]++;
    }
    let strCounter = counter.toString();
    if (map.has(strCounter)) {
      map.get(strCounter).push(word);
    } else map.set(strCounter, [word]);
  });
  return [...map.values()];
};
