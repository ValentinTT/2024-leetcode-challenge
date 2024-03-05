//948. Bag of Tokens
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let left = 0;
  let right = 0;
  tokens.sort((a, b) => a - b);
  let cs = 0;
  let ms = 0;

  while (left <= right) {
    if (power >= tokens[left]) {
      left++;
      power -= tokens[left];
      cs++;
      ms = Math.max(cs, ms);
    } else if (score > 0) {
      rigth--;
      power += tokens[right];
      cs--;
    } else break;
  }

  return ms;
};

console.log(bagOfTokensScore([200, 100], 150));
