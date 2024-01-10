/**
 * @author: ValentinTT
 * @brief 2385. Amount of Time for Binary Tree to Be Infected
 * @version 0.1
 * @date 10-01-2023
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let map = {};
  let convert = (node, parent) => {
    if (node === null) return;
    if (map[node.val] === undefined) {
      map[node.val] = new Set();
    }
    if (parent !== 0) map[node.val].add(parent);
    if (node.left !== null) map[node.val].add(node.left.val);
    if (node.right !== null) map[node.val].add(node.right.val);
    convert(node.left, node.val);
    convert(node.right, node.val);
  };

  convert(root, 0);
  let queue = [start];
  let visited = new Set([start]);
  let min = -1;

  while (queue.length !== 0) {
    let currentLevelSize = queue.length;
    while (currentLevelSize > 0) {
      let current = queue.shift();
      for (let num of map[current].keys()) {
        if (!visited.has(num)) {
          visited.add(num);
          queue.push(num);
        }
      }
      currentLevelSize--;
    }
    min++;
  }

  return min;
};
