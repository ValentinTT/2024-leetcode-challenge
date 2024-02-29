//1609. Even Odd Tree
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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  if (root === null) return true;
  let lastInDepth = [];

  let r = (node, d) => {
    if (node === null) return true;
    // even-indexed level, all nodes at the level have odd integer
    // odd-indexed level, all nodes at the level have even integer
    if (node.val % 2 === d % 2) return false;

    //can add on level n if last visited on n-1 is not added (theorically never will happened)
    if (lastInDepth.length < d) return false;
    //first on left side for this depth, add and doesn't check
    if (lastInDepth.length == d) lastInDepth.push(node.val);
    // even level
    else if (d % 2 === 0 && lastInDepth[d] >= node.val) return false;
    // odd level
    else if (d % 2 === 1 && lastInDepth[d] <= node.val) return false;
    // update level
    lastInDepth[d] = node.val;
    return r(node.left, d + 1) && r(node.right, d + 1);
  };

  return r(root, 0);
};
