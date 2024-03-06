//1750. Minimum Length of String After Deleting Similar Ends
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  s = s.split("");

  const findEnd = (idxS) => {
    const c = s[idxS];
    while (idxS < s.length) {
      if (c === s[idxS]) idxS++;
      else break;
    }
    return idxS - 1;
  };

  const findStart = (idxE) => {
    const c = s[idxE];
    while (idxE >= 0) {
      if (c === s[idxE]) idxE--;
      else break;
    }
    return idxE + 1;
  };

  let prefEnd = 0;
  let suffEnd = s.length;
  for (let prefStart = 0; prefStart < s.length; prefStart = prefEnd + 1) {
    suffEnd--;
    // console.log("prefS: ", prefStart, " - ", s[prefStart]);
    // console.log("suffE: ", suffEnd, " - ", s[suffEnd]);

    // only one remaining char (cant be removed)
    if (suffEnd === prefStart) return 1;

    // the first and last remaining chars are different,end of algo
    if (s[prefStart] !== s[suffEnd]) return suffEnd - prefStart + 1;
    prefEnd = findEnd(prefStart);

    //The remaining is all the same char
    if (prefEnd === suffEnd) {
      return 0;
    }

    // advance all the common chars
    suffEnd = findStart(suffEnd);
    // console.log("========================================");
    // console.log("prefE: ", prefEnd, " - ", s[prefEnd]);
    // console.log("suffS: ", suffEnd, " - ", s[suffEnd]);
    // console.log("========================================");
  }
  // never reached
  return 0;
};

console.log(minimumLength("aabccabba"));
