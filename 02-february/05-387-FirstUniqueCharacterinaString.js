/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let counter = new Array(26).fill(0);
  let aCode = "a".charCodeAt();
  for (let ch of s) {
    counter[ch.charCodeAt() - aCode]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counter[s[i].charCodeAt() - aCode] === 1) return i;
  }
  return -1;
};
