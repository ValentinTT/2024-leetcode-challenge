//647. Palindromic Substrings
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = s.length;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j > i; j--) {
      let isPal = true;
      for (let aux = 0; i + aux < j - aux && isPal; aux++) {
        if (s[i + aux] !== s[j - aux]) isPal = false;
      }
      if (isPal) res++;
    }
  }

  return res;
};
