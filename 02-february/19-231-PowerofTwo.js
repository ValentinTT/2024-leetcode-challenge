//231. Power of Two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // Easy approach
  // let aux = 1;
  // while(aux < n) {aux *= 2}
  // return aux == n;
  // Sure I can do something shifting bits right? need to research
  return n > 0 && (n & (n - 1)) == 0;
};
