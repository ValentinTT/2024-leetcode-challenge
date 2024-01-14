/**
 * @author: ValentinTT
 * @brief 1657. Determine if Two Strings Are Close
 * @version 0.1
 * @date 14-01-2023
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let counter1 = new Array(26).fill(0);
  let counter2 = new Array(26).fill(0);
  let a = "a".charCodeAt();

  for (let i = 0; i < word1.length; i++) {
    counter1[word1[i].charCodeAt() - a]++;
    counter2[word2[i].charCodeAt() - a]++;
  }

  for (let i = 0; i < counter1.length; i++) {
    if (
      (counter1[i] === 0 && counter2[i] !== 0) ||
      (counter1[i] !== 0 && counter2[i] === 0)
    )
      return false;
  }

  counter1.sort((a, b) => a - b);
  counter2.sort((a, b) => a - b);

  for (let i = 0; i < counter1.length; i++) {
    if (counter1[i] !== counter2[i]) return false;
  }

  return true;
};
