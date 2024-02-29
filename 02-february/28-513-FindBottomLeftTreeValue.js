//513. Find Bottom Left Tree Value
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
var findBottomLeftValue = function (root) {
  if (root === null) return 0;
  let depth = 0;
  let value = root.val;
  let r = (node, d) => {
    if (node === null) return;

    if (d > depth && node.val !== undefined) {
      depth = d;
      value = node.val;
    }

    r(node.left, d + 1);
    r(node.right, d + 1);
  };
  r(root, 0);
  return value;
};
