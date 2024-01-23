/**
 * @author: ValentinTT
 * @brief 1239. Maximum Length of a Concatenated String with Unique Characters
 * @version 0.1
 * @date 23-01-2023
 */
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const rec = (idx, str) => {
    if (idx >= arr.length) return str;

    // don't adding this word
    let notAdd = rec(idx + 1, str);
    // adding this word
    let s = new Set(arr[idx].split(""));
    if (s.size !== arr[idx].length) return notAdd;

    let words = str.split("");
    for (let c of words) {
      if (s.has(c)) return notAdd;
    }

    let add = rec(idx + 1, str + arr[idx]);

    return add.length > notAdd.length ? add : notAdd;
  };
  let a = rec(0, "");

  return a.length;
};
