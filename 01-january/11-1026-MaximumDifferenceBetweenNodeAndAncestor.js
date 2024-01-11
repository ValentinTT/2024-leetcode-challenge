/**
 * @author: ValentinTT
 * @brief 1026. Maximum Difference Between Node and Ancestor
 * @version 0.1
 * @date 11-01-2023
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
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  let diff = 0;

  const rec = (node, min, max) => {
    if (node === null) return;
    diff = Math.max(
      diff,
      Math.max(Math.abs(min - node.val), Math.abs(max - node.val))
    );

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    rec(node.left, min, max);
    rec(node.right, min, max);
  };
  if (root !== null) rec(root, root.val, root.val);

  return diff;
};
