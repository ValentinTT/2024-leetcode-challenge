//100. Same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // let r = (n1, n2) => {
  //     if(n1 === null && n2 !== null) return false;
  //     if(n2 === null && n1 !== null) return false;
  //     if(n1 === null && n2 === null) return true;
  //     if(n1.val !== n2.val) return false;

  //     return r(n1.left, n2.left) && r(n1.right, n2.right);
  // }
  // return r(p, q)

  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
