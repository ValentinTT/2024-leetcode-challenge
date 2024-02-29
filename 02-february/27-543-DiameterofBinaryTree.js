//543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let depth = (node) => {
    if (node === null) return [0, 0];
    let [diamL, profL] = depth(node.left);
    let [diamR, profR] = depth(node.right);
    let diamC = profL + profR;
    let maxProf = Math.max(profL, profR) + 1;

    return [Math.max(diamL, diamR, diamC), maxProf];
  };
  return depth(root)[0];
};
