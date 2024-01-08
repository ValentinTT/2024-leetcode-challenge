/**
 * @author: ValentinTT
 * @brief 1235. Maximum Profit in Job Scheduling
 * @version 0.1
 * @date 06-01-2023
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = Array.from({ length: startTime.length }, (_, i) => [
    startTime[i],
    endTime[i],
    profit[i],
  ]);
  jobs.sort((a, b) => a[0] - b[0]);
  const cache = {};

  var rec = (i) => {
    if (i === startTime.length) return 0;
    if (cache[i] !== undefined) return cache[i];
    // choose
    let res = rec(i + 1);
    // dont choose
    let j = i + 1;
    while (j < startTime.length && jobs[i][1] > jobs[j][0]) j++;
    res = Math.max(res, rec(j) + jobs[i][2]);
    cache[i] = res;
    return res;
  };
  return rec(0);
};
