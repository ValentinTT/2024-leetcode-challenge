//791. Custom Sort String
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let aC = "a".charCodeAt();
  let w = Array.from({ length: 26 }).fill(-1);

  for (let i = 0; i < order.length; i++) {
    w[order[i].charCodeAt() - aC] = i;
  }
  return s
    .split("")
    .sort((a, b) => w[a.charCodeAt() - aC] - w[b.charCodeAt() - aC])
    .join("");
};
