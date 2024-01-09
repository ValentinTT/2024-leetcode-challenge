/**
 * @author: ValentinTT
 * @brief 872. Leaf-Similar Trees
 * @version 0.1
 * @date 09-01-2023
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const rec = (node) => {
    let res = [];
    if (node === null) return [];
    if (node.left === null && node.right === null) return [node.val];
    if (node.left !== null) {
      res = rec(node.left);
    }
    if (node.right !== null) {
      res = [...res, ...rec(node.right)];
    }
    return res;
  };
  let leavesA = rec(root1);
  let leavesB = rec(root2);

  return (
    leavesA.length === leavesB.length &&
    leavesA.every((val, idx) => leavesB[idx] === val)
  );
};
