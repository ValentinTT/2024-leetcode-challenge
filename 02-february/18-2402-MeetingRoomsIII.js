//2402. Meeting Rooms III
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  // how many times each room was occupied
  let counter = new Array(n).fill(0);
  // when ends the meeting in that room (0 means empty)
  let rooms = new Array(n).fill(0);
  // sort meetings increasing by start time
  meetings.sort((a, b) => a[0] - b[0]);

  // given a time "nextStart" return the first room empty
  const findEmptyRoom = (nextStart) => {
    let next = 0;
    for (let i = 0; i < rooms.length; i++) {
      // if end of meeting held in room i is before nextStart
      // thats the free empty room
      if (rooms[i] <= nextStart) return i;
      if (rooms[next] > rooms[i]) next = i;
    }
    return next;
  };

  for (let [start, end] of meetings) {
    let nextEnd = findEmptyRoom(start);
    // all rooms occupied, delay meeting
    if (rooms[nextEnd] > start) {
      end += rooms[nextEnd] - start;
    }
    rooms[nextEnd] = end;
    counter[nextEnd]++;
  }

  let max = 0;
  for (let i = 1; i < counter.length; i++) {
    if (counter[max] < counter[i]) max = i;
  }
  return max;
};
