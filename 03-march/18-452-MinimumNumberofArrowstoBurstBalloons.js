//452. Minimum Number of Arrows to Burst Balloons
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let prevEnd = points[0][1];

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > prevEnd) {
      arrows++;
      prevEnd = points[i][1];
    } else prevEnd = Math.min(prevEnd, points[i][1]);
  }

  return arrows;
};

// Not the solution to the problem, I read something else hahaha
// if (points.length === 0) return 0;
// points.sort((a, b) => a[0] - b[0]);
// let res = [];
// let curr = points[0];
// for (let i = 0; i < points.length; i++) {
//     // next balloon overlaps
//     if (curr[0] <= points[i][0] && points[i][0] <= curr[1])
//         curr[1] = Math.max(curr[1], points[i][1])
//     // next balloon doesnt overlap
//     else {
//         res.push(curr);
//         curr = points[i];
//     }
// }
// // to add the last balloon/s
// if (points.length >= 1 && curr !== points[points.length - 1])
//     return res.length + 1
// return res.length;
