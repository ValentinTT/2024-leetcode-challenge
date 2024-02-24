//997. Find the Town Judge
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let counter = Array.from({ length: n + 1 }).fill(0);
  let trusters = new Set();

  for (let [a, b] of trust) {
    counter[b]++;
    trusters.add(a);
  }

  for (let i = 1; i < counter.length; i++)
    if (counter[i] >= n - 1 && !trusters.has(i)) return i;
  return -1;
};
