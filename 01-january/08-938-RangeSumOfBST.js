/**
 * @author: ValentinTT
 * @brief 938. Range Sum of BST
 * @version 0.1
 * @date 08-01-2023
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let total = 0;
  const rec = (node) => {
    if (node === null) return;
    if (node.val > low) rec(node.left);
    if (node.val < high) rec(node.right);

    if (node.val >= low && node.val <= high) total += node.val;
  };
  rec(root);
  return total;
};
