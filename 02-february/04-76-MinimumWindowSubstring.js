//76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length === 0 || t.length > s.length) return "";

  let match = new Map();
  let window = new Map();
  let condNeed = 0; //the different types of chars in t with its quantities
  let condMet = 0; // the actual conditions met in the window

  for (let ch of t) {
    if (!match.has(ch)) match.set(ch, 0);
    match.set(ch, match.get(ch) + 1);
  }
  condNeed = match.size;

  let res = [-1, -1]; // start, end
  let start = 0,
    end = 0;
  for (; end < s.length; end++) {
    let ch = s[end];

    if (!match.has(ch)) continue;

    if (!window.has(ch)) window.set(ch, 1);
    else window.set(ch, window.get(ch) + 1);

    // we just met another character quantity
    if (match.get(ch) === window.get(ch)) condMet++;

    // for(; start <  ;start++)
    if (condMet !== condNeed) continue;

    for (; start <= end; start++) {
      ch = s[start];
      if (!window.has(ch)) continue;
      window.set(ch, window.get(ch) - 1);
      if (match.get(ch) > window.get(ch)) condMet--;
      if (condMet === condNeed) continue;

      if (res[0] === -1) res = [start, end];
      if (res[1] - res[0] > end - start) res = [start, end];
      start++;
      break;
    }
  }
  return s.slice(res[0], res[1] + 1);
};
