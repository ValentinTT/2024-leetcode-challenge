//2092. Find All People With Secret
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  let aware = new Set([0, firstPerson]);
  meetings.sort((a, b) => a[2] - b[2]);

  let ct = 0;
  let sim = new Map();
  for (let [x, y, t] of meetings) {
    if (ct === t) {
      sim.push([x, y]);
      continue;
    }
    sim.sort((a, b) => {
      if (aware[a[0]] || aware[a[1]]) return -1;
      else if (aware[b[0]] || aware[b[1]]) return 1;
      return 0;
    });
    for (let [p1, p2] of sim) {
      if (aware[p1]) aware[p2] = true;
      else if (aware[p2]) aware[p1] = true;
    }
    ct = t;
    sim = [[x, y]];
  }

  return [...aware.values()];
};

console.log(
  findAllPeople(
    6,
    [
      [1, 2, 5],
      [2, 3, 8],
      [1, 5, 10],
    ],
    1
  )
);
