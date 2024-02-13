//2108. Find First Palindromic String in the Array
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let str of words) {
    let isPal = true;
    let half = (str.length - (str.length % 2)) / 2;

    for (let i = 0; i < half; i++) {
      if (str[i] === str[str.length - 1 - i]) continue;
      isPal = false;
      break;
    }
    if (isPal) return str;
  }
  return "";
};
