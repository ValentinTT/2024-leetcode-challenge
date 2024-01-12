/**
 * @author: ValentinTT
 * @brief 1704. Determine if String Halves Are Alike
 * @version 0.1
 * @date 12-01-2023
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelsCount = 0;
  let a = s.slice(0, s.length / 2);
  let b = s.slice(s.length / 2);

  for (let i = 0; i < a.length; i++) {
    if (vowels.has(a[i])) vowelsCount++;
    if (vowels.has(b[i])) vowelsCount--;
  }
  return vowelsCount === 0;
};
