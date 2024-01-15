/**
 * @author: ValentinTT
 * @brief 2225. Find Players With Zero or One Losses
 * @version 0.1
 * @date 15-01-2023
 */
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let max = 0;
  for (let i of matches) {
    if (Math.max(i[0], i[1]) > max) max = Math.max(i[0], i[1]);
  }

  let counter = new Array(max + 1).fill(-1);
  for (let i of matches) {
    if (counter[i[0]] === -1) counter[i[0]] = 0;
    if (counter[i[1]] === -1) counter[i[1]] = 0;
    counter[i[1]]++;
  }

  let answer = [[], []];
  for (let i = 1; i < counter.length; i++) {
    if (counter[i] === 0) answer[0].push(i);
    else if (counter[i] === 1) answer[1].push(i);
  }
  return answer;
};
