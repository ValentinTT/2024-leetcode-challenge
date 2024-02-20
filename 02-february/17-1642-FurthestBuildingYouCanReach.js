//1642. Furthest Building You Can Reach
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  // let dfs = (i, bs, ls) => {
  //     if (bs < 0) return i - 1;
  //     if (ls < 0) return i - 1;
  //     if (i >= heights.length - 1) return i;
  //     let diff = heights[i + 1] - heights[i];

  //     if (diff < 0) {
  //         return dfs(i + 1, bs, ls);
  //     }
  //     return Math.max(dfs(i + 1, bs - diff, ls), dfs(i + 1, bs, ls - 1));
  // };

  // return dfs(0, bricks, ladders);

  let arr = new MaxHeap();
  for (let i = 0; i < heights.length - 1; i++) {
    let diff = heights[i + 1] - heights[i];

    if (diff <= 0) {
      continue;
    }

    bricks -= diff;
    arr.push(diff);

    if (bricks < 0) {
      bricks += arr.pop();
      ladders--;
    }
    if (ladders < 0) return i;
  }
  return heights.length - 1;
};

// search and copy in the solutions a heap queue

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return max;
  }

  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[parent] >= this.heap[current]) {
        break;
      }
      [this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ];
      current = parent;
    }
  }

  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let maxChild = leftChild;

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[leftChild]
      ) {
        maxChild = rightChild;
      }

      if (
        leftChild >= this.heap.length ||
        this.heap[current] >= this.heap[maxChild]
      ) {
        break;
      }

      [this.heap[current], this.heap[maxChild]] = [
        this.heap[maxChild],
        this.heap[current],
      ];
      current = maxChild;
    }
  }
}
